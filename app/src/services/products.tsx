import { addDocument, deleteDocument, getDocument, getDocuments } from "./db";

const PRODUCTS_COLLECTION = 'product';

export const getProduct = async (id: string) => {
  return await getDocument(PRODUCTS_COLLECTION, id)
}

export const addProduct = async (data: any) => {
  return await addDocument(PRODUCTS_COLLECTION, data)
}

export const deleteProduct = async (id: string) => {
  return await deleteDocument(PRODUCTS_COLLECTION, id)
}

export const getProducts = async () => {
  return await getDocuments(PRODUCTS_COLLECTION)
}