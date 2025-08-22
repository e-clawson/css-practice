import './App.css'

function App() {

  return (
    <>
    <div className='title'>
      <h1>CSS Practice!</h1>
    </div>
    <div className='text'>
      <h2>CSS Flexbox</h2>
      <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox">MDN Docs</a>
      <a href="https://www.w3schools.com/css/css3_flexbox.asp">W3 Schools</a>
      <a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/">CSS Tricks</a>
      <p>Text About CSS flexbox </p>
      <p>To use CSS Flexbox, you need to includethe following: </p>
      <p> display: flex;</p>
    </div>
    <div className='text'>
      <h2>justify-content</h2>
      <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content">MDN Docs</a>
      <a href="https://www.w3schools.com/cssref/css3_pr_justify-content.php">W3 Schools</a>
      <p>The Justify Content property aligns a flexible container's items horizontally (to align things vertically, one must use the align-items property instead) </p>
      <p>To align items to the center, you use the following: </p>
      <p>align-items: center;</p>
    </div>
    <div className='text-boxes'>
        <p className='text-box'>Box 1</p>
        <p className='text-box'>Box 2</p>
        <p className='text-box'>Box 3</p>
        <p className='text-box'>Box 4</p>
        <p className='text-box'>Box 5</p>
        <p className='text-box'>Box 6</p>
        <p className='text-box'>Box 7</p>
        <p className='text-box'>Box 8</p>
        <p className='text-box'>Box 9</p>
        <p className='text-box'>Box 10</p>
        <p className='text-box'>Box 11</p>
        <p className='text-box'>Box 12</p>
      </div>
    </>
  )
}

export default App
