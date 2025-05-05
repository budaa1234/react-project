
const { useState } = require("react")

const Home = () => {
    const [isLiked, setIsLiked] = useState(false)
    const onChange = () => {
        setIsLiked(!isLiked)
    }
    return <div>
        <div style={{
            display: "flex"
        }}>
            <input type="checkbox" onChange={onChange}/><p>I liked this</p>
        </div>
        <p>{isLiked ? 'I liked this.' : 'You did not like this.'}</p>
    </div>
}
export default Home