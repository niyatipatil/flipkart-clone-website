import fs from "fs";
import path from "path";
interface Product {
  id: number;
  count?: number;
  [key: string]: any;
}

const dataFilePath = path.join(process.cwd(), "public", "data.json");

const ensureDataFileExists = (): void => {
  if (!fs.existsSync(dataFilePath)) {
    fs.writeFileSync(dataFilePath, "[]", "utf-8");
  }
};

export const readData = (): Product[] => {
  try {
    ensureDataFileExists();
    const jsonData = fs.readFileSync(dataFilePath, "utf-8");
    return JSON.parse(jsonData) as Product[];
  } catch (err) {
    console.error("Error reading data file:", err);
    return [];
  }
};

export const writeData = (data: Product[]): void => {
  try {
    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2), "utf-8");
  } catch (err) {
    console.error("Error writing data file:", err);
  }
};

export const addOrUpdateProduct = (product: Product): boolean => {
  const data = readData();
  const existingProduct = data.find((item) => item.id === product.id);

  if (existingProduct) {
    existingProduct.count = (existingProduct.count || 1) + 1;
  } else {
    product.count = 1;
    data.push(product);
  }

  writeData(data);

  return !existingProduct;
};

export const deleteProductById = (id: number) => {
  let data = readData();

  data = data.filter((product) => product.id !== id);

  writeData(data);

  return !(data.length !== data.length);
};
