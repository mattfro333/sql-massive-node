CREATE TABLE IF NOT EXISTS Products

(
  ProductId SERIAL PRIMARY KEY,
  Name VARCHAR(40),
  Description VARCHAR(100),
  Price NUMERIC(10,2),
  ImageUrl VARCHAR(400)
)
