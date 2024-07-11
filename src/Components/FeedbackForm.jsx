import { useState } from "react"
import { useForm } from 'react-hook-form'
import '../CSSFiles/circle.css'
import '../CSSFiles/feedbackForm.css'
function FeedbackForm() {

  const { register, handleSubmit, formState: { errors } ,reset} = useForm();
  const onFormSubmition = (data) => {
    const jsonData = JSON.stringify(data, null, 2)
    alert("current state is: " + jsonData)
    reset();
  }
  const displayError = (errors) => { }

  return (
    <div>

      {/* Display product Div */}
      <div className="circle">
        <div className="item">
          <div className="cir"> 
            <a href=""> 
            <img src="https://www.eatingwell.com/thmb/QYZnBgF72TIKI6-A--NyoPa6avY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/greek-salmon-bowl-f681500cbe054bb1adb607ff55094075.jpeg"/>
            </a></div>
          <div className="box">appetizer</div>
           <a href="#popup-box" id="submitFeedback">
             Submit a Feedback</a>
       </div>
      </div>

      {/* Feedback Form div */}
      <div id="popup-box" className="feedbackForm">
        <form onSubmit={handleSubmit(onFormSubmition, displayError)} id="form" >
          <h1>Submit Comment</h1>
          <label>Rating</label>
          <br /><br />
          <select name="rating" {...register('rating')} required>
            <option value=''>Select</option>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
          </select>
          <br /><br />
          <label>Your Name</label>
          <br /><br />
          <input type="text" name="Name"
            {...register('Name', {
              required: true,
              pattern:{
                value: /^[a-zA-Z]+$/,
                message:'Only letters are allowed'
              },
              minLength: {
                value: 2,
                message: 'Must be greater than 2 characters'
                
              },
              maxLength: {
                value: 15,
                message: 'Must be less than 15 characters'
              }
            })} />
          <br/>
          <p>{errors?.Name && errors.Name.message}</p>
          <label>Comment</label>
          <br /><br />
          <textarea name="comment" {...register('comment')} required />
          <br /><br />
          <button>Submit</button>
          <a href="#" className="cross">&times;</a>
        </form>
      </div>

    </div>
  )
}
export default FeedbackForm;