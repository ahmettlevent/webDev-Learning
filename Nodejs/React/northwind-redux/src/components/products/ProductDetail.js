import React from "react"
import TextInput from "../toolbox/TextInput"
import { Button } from "reactstrap"
import SelectInput from "../toolbox/SelectInput"

const ProductDetail = ({
  categories,
  product,
  handleSave,
  handleChange,
  errors
}
) => {

  return (
    <form onSubmit={handleSave}>
      <h3>{product.id ? "Güncelle" : "Ekle"}</h3>
      <TextInput
        name="productName"
        label="Product Name"
        value={product.productName}
        onChange={handleChange}
        error={errors.productName}
      />
      <SelectInput
        name="categoryId"
        label="Category"
        value={product.categoryId || ""}
        defaultOption="Seçiniz"
        options={categories.map(category => ({
          value: category.id,
          text: category.categoryName
        }))}
        onChange={handleChange}
        error={errors.categoryId}
      />

      <TextInput
        name="unitPrice"
        label="Unit Price"
        value={product.unitPrice}
        onChange={handleChange}
        error={errors.unitPrice}
      />

      <TextInput
        name="quantityPerUnit"
        label="Quantity Per Unit"
        value={product.quantityPerUnit}
        onChange={handleChange}
        error={errors.quantityPerUnit}
      />

      <TextInput
        name="unitsInStock"
        label="Units In Stock"
        value={product.unitsInStock}
        onChange={handleChange}
        error={errors.unitsInStock}
      />

      <Button type="submit" className="btn btn-success">Save</Button>
    </form >
  )
}

export default ProductDetail