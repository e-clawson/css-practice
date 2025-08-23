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
      <p>CSS Flexbox helps software engineers to create pages with dynamic styling, allowing the items on the page to be re-sized or altered to best fit the available space on the page.  </p>
      <p>To use CSS Flexbox, you need to includethe following: </p>
      <p> display: flex;</p>
    </div>
    <div className='text'>
      <h2>justify-content</h2>
      <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content">MDN Docs</a>
      <a href="https://www.w3schools.com/cssref/css3_pr_justify-content.php">W3 Schools</a>
      <p>The Justify Content property aligns a flexible container's items horizontally, and with a grid to align things in-line (to align things vertically, one must use the align-items property instead) </p>
      <p>The following are the types of alignments available with the justify-content property:  </p>
      <ul>
        <li>flex-start - default - items aligns items to the left side of the container </li>
        <li>flex-end - items aligns items to the right side of the container </li>
        <li>center - aligns items to the center</li>
        <li>space-between - provides equal space between items (between them only - not before or after)</li>
        <li>space-around - equal spacing before, between, and after items within the container</li>
        <li>space-evenly - Items will have equal space around them </li>
        <li>initial - set the property to its default value (flex-start?)</li>
        <li>inherit - inherits the property from its parent element </li>
      </ul>

    </div>
    <div className='text-buttons'>
      <button className='flex-start'>Flex-Start</button>
      <button className='flex-end'>Flex-End</button>
      <button className='center'>Center</button>
      <button className='space-between'>Space-Between</button>
      <button className='space-around'>Space-Around</button>
      <button className='space-evenlty'>Space-Evenly</button>
    </div>
    </>
  )
}

export default App
