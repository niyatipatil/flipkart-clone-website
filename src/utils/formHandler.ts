import fs from "fs";
import path from "path";

interface Customer {
  email: string;
  pin: string;
  address: string;
  firstName: string;
  lastName: string;
  phone: string;
  city: string;
}

const dataFilePath = path.join(process.cwd(), "public", "form.json");

const ensureDataFileExists = (): void => {
  if (!fs.existsSync(dataFilePath)) {
    fs.writeFileSync(dataFilePath, "[]", "utf-8");
  }
};

export const readData = (): Customer[] => {
  try {
    ensureDataFileExists();
    const jsonData = fs.readFileSync(dataFilePath, "utf-8");
    return JSON.parse(jsonData) as Customer[];
  } catch (err) {
    console.error("Error reading data file:", err);
    return [];
  }
};

export const writeData = (data: Customer[]): void => {
  try {
    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2), "utf-8");
  } catch (err) {
    console.error("Error writing data file:", err);
  }
};

export const addCustomer = (customer: Customer): boolean => {
  const data = readData();
  data.push(customer);
  console.log(data);
  writeData(data);

  return true;
};
