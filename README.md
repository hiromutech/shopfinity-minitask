# 🛍️ Shopfinity

**Shopfinity** is a simple React Native e-commerce application built with **Expo**, showcasing core features of a shopping cart system including real-time item tracking, voucher discounts, and clean UI styling using **NativeWind**.

---

## 📱 Features

- 🛒 **Add to Cart**: Select products and add them to your cart.
- 🧾 **Cart Summary**:
  - View the number of items in your cart.
  - See the total price of all selected items in real-time.
- ❌ **Remove Items**: Remove individual products from the cart.
- 🎟️ **Voucher Discount**:
  - Apply a voucher code via an input field.
  - Automatically calculates and applies a discount if valid.
- ⚛️ **React Hooks**:
  - `useState`, `useEffect`, `useMemo`, and `useContext` are used for state management and UI updates.
- 🎨 **Styling with NativeWind**: Tailwind-like utility classes for styling components in React Native.

---

## 🛍️ Static Products

The app includes **4 pre-defined static products**, each with:
- Name
- Description
- Price
- Product image

---

## 🧰 Tech Stack

| Tech | Usage |
|------|-------|
| [React Native](https://reactnative.dev/) | Cross-platform mobile development |
| [Expo](https://expo.dev/) | Easy setup & build toolchain |
| [NativeWind](https://www.nativewind.dev/) | Utility-first styling |
| [TypeScript](https://www.typescriptlang.org/)  | Type safety |

---

## 🚀 Getting Started

### 1. Install Dependencies

```bash
npm install
# or
yarn install

### 2. Run the Application

npx expo start
