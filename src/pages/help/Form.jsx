// style
import '../../App.css'

function Form() {
    return (
        <>
            <h1>Send Us Questions</h1>
            <div className="form-container">
                <form action="">
                    <label className="form-control">
                        <span>Your Email:</span>
                        <input type="text" />
                    </label>
                    <label className="form-control">
                        <span>Your Email:</span>
                        <textarea name="" id=""></textarea>
                    </label>
                    <button className="button">Send</button>
                </form>
            </div>
        </>
    )
}

export default Form
