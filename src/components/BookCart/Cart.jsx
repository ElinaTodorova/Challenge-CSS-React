import '../BookCart/cart.scss'
export default function Cart() {

    return (
        <>
        <div className="cart">
            <div className="imageContainer">
                <img src="/public/sass-image.png" alt="Flowers img" />
            </div>
            <h1>Syntactially Awesome Style Sheets</h1>
       
        <div className="list">
            <h2>Sass Advantages</h2>
            <ul>
                <li>💡 Sass facilitates you to write clean, easy and less CSS in a programming construct.</li>
                <li>💡 It contains fewer codes so you can write CSS quicker.</li>
                <li>💡 It is more stable, powerful, and elegant because it is an extension of CSS.</li>
                <li>💡 It is compatible with all versions of CSS. So, you can use any available CSS libraries.</li>
                <li>💡 It provides nesting so you can use nested syntax and useful functions.</li>
            </ul>
        </div>
        </div>
        </>
    )
}