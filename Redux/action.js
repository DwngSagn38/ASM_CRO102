import { createAction } from "@reduxjs/toolkit";

export const addItem = createAction('cart/addItem');
export const removeItem = createAction('cart/removeItem');
export const truItem = createAction('cart/truItem');
export const congItem = createAction('cart/congItem');