
"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowUpRight,
  Heart,
  ShoppingBag,
  Check,
  Sparkles,
  X,
  Plus,
  Minus,
  Trash2,
} from "lucide-react";

import { products } from "@/data/products";
import "./Products.css";

type Filter =
  | "All"
  | "Cleansers"
  | "Serums"
  | "Moisturizers"
  | "Sun Care"
  | "Face Masks"
  | "Exfoliators"
  | "Eye Care"
  | "Lip Care";

type Panel = "wishlist" | "cart" | null;

type Cart = Record<number, number>;

const filters: Filter[] = [
  "All",
  "Cleansers",
  "Serums",
  "Moisturizers",
  "Sun Care",
  "Face Masks",
  "Exfoliators",
  "Eye Care",
  "Lip Care",
];

export default function Products() {
  const [activeFilter, setActiveFilter] = useState<Filter>("All");

  const [wishlist, setWishlist] = useState<number[]>([]);
  const [cart, setCart] = useState<Cart>({});

  const [panel, setPanel] = useState<Panel>(null);
  const [loaded, setLoaded] = useState(false);

  // RESTORE SAVED PRODUCTS
  useEffect(() => {
    try {
      const savedWishlist = localStorage.getItem("olumi-wishlist");
      const savedCart = localStorage.getItem("olumi-cart");

      if (savedWishlist) {
        setWishlist(JSON.parse(savedWishlist));
      }

      if (savedCart) {
        setCart(JSON.parse(savedCart));
      }
    } catch {
      console.error("Could not restore saved shopping data.");
    }

    setLoaded(true);
  }, []);

  // SAVE PRODUCTS
  useEffect(() => {
    if (!loaded) return;

    localStorage.setItem(
      "olumi-wishlist",
      JSON.stringify(wishlist)
    );

    localStorage.setItem(
      "olumi-cart",
      JSON.stringify(cart)
    );
  }, [wishlist, cart, loaded]);

  // FILTER PRODUCTS BY CATEGORY
  const filteredProducts = useMemo(() => {
    if (activeFilter === "All") {
      return products;
    }

    return products.filter(
      (product) => product.category === activeFilter
    );
  }, [activeFilter]);

  // WISHLIST PRODUCTS
  const wishlistProducts = products.filter((product) =>
    wishlist.includes(product.id)
  );

  // CART PRODUCTS
  const cartProducts = products.filter(
    (product) => (cart[product.id] || 0) > 0
  );

  // CART COUNT
  const cartCount = Object.values(cart).reduce(
    (total, quantity) => total + quantity,
    0
  );

  // CART TOTAL
  const cartTotal = cartProducts.reduce(
    (total, product) =>
      total + product.price * (cart[product.id] || 0),
    0
  );

  // TOGGLE WISHLIST
  const toggleWishlist = (id: number) => {
    setWishlist((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  };

  // ADD TO CART
  const addToBag = (id: number) => {
    setCart((current) => ({
      ...current,
      [id]: (current[id] || 0) + 1,
    }));
  };

  // INCREASE CART QUANTITY
  const increaseQuantity = (id: number) => {
    setCart((current) => ({
      ...current,
      [id]: (current[id] || 0) + 1,
    }));
  };

  // DECREASE CART QUANTITY
  const decreaseQuantity = (id: number) => {
    setCart((current) => {
      const updated = { ...current };

      if (updated[id] <= 1) {
        delete updated[id];
      } else {
        updated[id] -= 1;
      }

      return updated;
    });
  };

  // REMOVE FROM CART
  const removeFromCart = (id: number) => {
    setCart((current) => {
      const updated = { ...current };

      delete updated[id];

      return updated;
    });
  };

  return (
    <section id="shop" className="products-section">
      <div className="products-container">

        {/* HEADER */}
        <div className="products-header">
          <div className="products-heading-content">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="products-label"
            >
              THE O&apos;LUMI EDIT
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="products-heading"
            >
              A little ritual.
              <br />
              <span>A lasting glow.</span>
            </motion.h2>
          </div>

          <div className="products-header-right">
            <p className="products-intro">
              Discover thoughtful essentials designed to bring a softer,
              more intentional touch to your everyday skincare ritual.
            </p>

            {/* SHOPPING ACTIONS */}
            <div className="products-actions">
              <button
                className="products-action-button"
                onClick={() => setPanel("wishlist")}
                aria-label="Open wishlist"
              >
                <Heart size={17} />
                <span>WISHLIST</span>

                <span className="products-cart-count">
                  {wishlist.length}
                </span>
              </button>

              <button
                className="products-action-button"
                onClick={() => setPanel("cart")}
                aria-label="Open shopping bag"
              >
                <ShoppingBag size={17} />
                <span>YOUR BAG</span>

                <span className="products-cart-count">
                  {cartCount}
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* MARQUEE */}
        <div className="products-marquee">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className="products-marquee-track"
          >
            {Array.from({ length: 8 }).map((_, index) => (
              <span
                key={index}
                className="products-marquee-item"
              >
                THOUGHTFUL SKINCARE
                <Sparkles size={13} />
                YOUR DAILY RITUAL
                <Sparkles size={13} />
              </span>
            ))}
          </motion.div>
        </div>

        {/* CATEGORY FILTERS */}
        <div className="products-filters">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              aria-pressed={activeFilter === filter}
              className={`products-filter-button ${
                activeFilter === filter ? "active" : ""
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* PRODUCT COUNT */}
        <div className="products-count">
          <p>OUR COLLECTION</p>
          <p>{filteredProducts.length} PRODUCTS</p>
        </div>

        {/* PRODUCT GRID */}
        <motion.div layout className="products-grid">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product, index) => {
              const isWishlisted = wishlist.includes(product.id);
              const isAdded = (cart[product.id] || 0) > 0;

              return (
                <motion.article
                  layout
                  key={product.id}
                  initial={{ opacity: 0, y: 35 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.06,
                  }}
                  className="product-card"
                >
                  {/* PRODUCT IMAGE */}
                  <div className="product-image-wrapper">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="product-image"
                    />

                    <div className="product-image-overlay" />

                    {product.tag && (
                      <span className="product-tag">
                        {product.tag}
                      </span>
                    )}

                    {/* WISHLIST BUTTON */}
                    <button
                      onClick={() => toggleWishlist(product.id)}
                      aria-label={
                        isWishlisted
                          ? `Remove ${product.name} from wishlist`
                          : `Add ${product.name} to wishlist`
                      }
                      aria-pressed={isWishlisted}
                      className="product-wishlist-button"
                    >
                      <Heart
                        size={17}
                        strokeWidth={1.5}
                        fill={isWishlisted ? "#34483b" : "none"}
                      />
                    </button>

                    {/* ADD TO BAG BUTTON */}
                    <button
                      onClick={() => addToBag(product.id)}
                      className="product-add-button"
                    >
                      {isAdded ? (
                        <>
                          <Check size={15} />
                          Add another
                        </>
                      ) : (
                        <>
                          <ShoppingBag size={15} />
                          Add to bag
                        </>
                      )}
                    </button>
                  </div>

                  {/* PRODUCT DETAILS */}
                  <div className="product-details">
                    <p className="product-category">
                      {product.category}
                    </p>

                    <div className="product-info">
                      <h3 className="product-name">
                        {product.name}
                      </h3>

                      <span className="product-price">
                        ₹{product.price}
                      </span>
                    </div>

                    <p className="product-quantity">
                      {product.quantity}
                    </p>

                    {/* SKIN TYPE */}
                    <div className="product-skin-types">
                      <span className="skin-type-label">
                        SUITABLE FOR
                      </span>

                      <p>
                        {product.skinType.join(" · ")}
                      </p>
                    </div>

                    <div className="product-divider" />

                    <p className="product-footer">
                      O&apos;LUMI ESSENTIALS

                      <ArrowUpRight
                        size={14}
                        className="product-footer-icon"
                      />
                    </p>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* BOTTOM LINK */}
        <div className="products-bottom-link-wrapper">
          <a href="#contact" className="products-bottom-link">
            Discover the O&apos;LUMI experience

            <ArrowUpRight
              size={16}
              className="products-bottom-icon"
            />
          </a>
        </div>
      </div>

      {/* WISHLIST / CART DRAWER */}
      <AnimatePresence>
        {panel && (
          <>
            {/* BACKDROP */}
            <motion.div
              className="shopping-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setPanel(null)}
            />

            {/* DRAWER */}
            <motion.aside
              className="shopping-drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "tween",
                duration: 0.35,
              }}
              aria-label={
                panel === "cart" ? "Shopping bag" : "Wishlist"
              }
            >
              {/* DRAWER HEADER */}
              <div className="shopping-drawer-header">
                <div>
                  <p className="shopping-drawer-label">
                    O&apos;LUMI ESSENTIALS
                  </p>

                  <h2>
                    {panel === "cart"
                      ? "Your bag"
                      : "Your wishlist"}
                  </h2>
                </div>

                <button
                  onClick={() => setPanel(null)}
                  className="shopping-close"
                  aria-label="Close panel"
                >
                  <X size={21} />
                </button>
              </div>

              <div className="shopping-drawer-content">

                {/* WISHLIST ITEMS */}
                {panel === "wishlist" && (
                  <>
                    {wishlistProducts.length === 0 ? (
                      <div className="shopping-empty">
                        <Heart size={35} strokeWidth={1} />

                        <h3>Your wishlist is waiting.</h3>

                        <p>
                          Save your favourite skincare essentials
                          by tapping the heart icon.
                        </p>

                        <button onClick={() => setPanel(null)}>
                          EXPLORE PRODUCTS
                        </button>
                      </div>
                    ) : (
                      wishlistProducts.map((product) => (
                        <div
                          key={product.id}
                          className="shopping-item"
                        >
                          <div className="shopping-item-image">
                            <Image
                              src={product.image}
                              alt={product.name}
                              fill
                              sizes="90px"
                            />
                          </div>

                          <div className="shopping-item-info">
                            <p>{product.category}</p>

                            <h3>{product.name}</h3>

                            <span>{product.quantity}</span>

                            <div className="shopping-skin-types">
                              Suitable for:{" "}
                              {product.skinType.join(", ")}
                            </div>

                            <strong>₹{product.price}</strong>

                            <button
                              onClick={() => {
                                addToBag(product.id);
                                setPanel("cart");
                              }}
                            >
                              ADD TO BAG
                              <ArrowUpRight size={13} />
                            </button>
                          </div>

                          <button
                            className="shopping-remove"
                            onClick={() =>
                              toggleWishlist(product.id)
                            }
                            aria-label={`Remove ${product.name} from wishlist`}
                          >
                            <X size={17} />
                          </button>
                        </div>
                      ))
                    )}
                  </>
                )}

                {/* CART ITEMS */}
                {panel === "cart" && (
                  <>
                    {cartProducts.length === 0 ? (
                      <div className="shopping-empty">
                        <ShoppingBag
                          size={35}
                          strokeWidth={1}
                        />

                        <h3>Your bag is feeling light.</h3>

                        <p>
                          Discover your daily skincare essentials
                          and add something you love.
                        </p>

                        <button onClick={() => setPanel(null)}>
                          EXPLORE PRODUCTS
                        </button>
                      </div>
                    ) : (
                      cartProducts.map((product) => (
                        <div
                          key={product.id}
                          className="shopping-item"
                        >
                          <div className="shopping-item-image">
                            <Image
                              src={product.image}
                              alt={product.name}
                              fill
                              sizes="90px"
                            />
                          </div>

                          <div className="shopping-item-info">
                            <p>{product.category}</p>

                            <h3>{product.name}</h3>

                            <span>{product.quantity}</span>

                            <div className="shopping-skin-types">
                              Suitable for:{" "}
                              {product.skinType.join(", ")}
                            </div>

                            <strong>₹{product.price}</strong>

                            {/* QUANTITY CONTROLS */}
                            <div className="shopping-quantity">
                              <button
                                onClick={() =>
                                  decreaseQuantity(product.id)
                                }
                                aria-label="Decrease quantity"
                              >
                                <Minus size={13} />
                              </button>

                              <span>{cart[product.id]}</span>

                              <button
                                onClick={() =>
                                  increaseQuantity(product.id)
                                }
                                aria-label="Increase quantity"
                              >
                                <Plus size={13} />
                              </button>
                            </div>
                          </div>

                          {/* REMOVE ITEM */}
                          <button
                            className="shopping-remove"
                            onClick={() =>
                              removeFromCart(product.id)
                            }
                            aria-label={`Remove ${product.name} from bag`}
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      ))
                    )}
                  </>
                )}
              </div>

              {/* CART FOOTER */}
              {panel === "cart" && cartProducts.length > 0 && (
                <div className="shopping-drawer-footer">
                  <div className="shopping-subtotal">
                    <span>SUBTOTAL</span>

                    <strong>
                      ₹{cartTotal.toLocaleString("en-IN")}
                    </strong>
                  </div>

                  <p>
                    Shipping and taxes calculated at checkout.
                  </p>

                  <button
                    className="shopping-checkout"
                    onClick={() =>
                      alert("Checkout will be available soon!")
                    }
                  >
                    PROCEED TO CHECKOUT
                    <ArrowUpRight size={16} />
                  </button>
                </div>
              )}
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
