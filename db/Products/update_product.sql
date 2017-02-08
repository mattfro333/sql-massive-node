UPDATE Products
SELECT
Name = COALESCE($2, Name),
Description = COALESCE($3, Description),
Price = COALESCE($4, Price),
ImageUrl = COALESCE($5, ImageUrl)

WHERE ProductId = $1
RETURNING *;
