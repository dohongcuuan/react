

const ProductPage = (props) => { // nhận props từ App.tsx

    const removeProduct = (id) => { // hàm xử lý sự kiện khi click vào nút remove
        props.onRemove(id) // gọi hàm onRemove từ props truyền vào
    }
    return (
        <div>
            {props.products.map((item) => {
                return <div key={item.id}>
                    <h2>{item.name}</h2>
                    <button onClick={() => removeProduct(item.id)}>Remove</button>
                </div>

            })}
        </div>
    )
}

export default ProductPage