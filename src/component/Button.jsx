export default function Button({ text, className, id }) {
  function moveToCounter(e) {
    e.preventDefault();

    const target = document.getElementById('counter');

    if (target && id) {
      const offset = window.innerHeight * 0.15;

      // target.getBoundingClientRect().top -> returns the distance from top of the Viewport to the target element
      // I am also adding the scrollY because just to make sure we are getting the complete distance even after scrolling the page
      // Example: If I scroll 50px then that 50px will not includ in the top of the viewport, hence we are adding that 50px also by using "window.scrollY"

      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' }); // top value will become the top of the viewport
    }
  }

  return (
    <a
      onClick={(e) => moveToCounter(e)}
      className={`${className ?? ''} cta-wrapper`}
    >
      <div className="cta-button group">
        <div className="bg-circle" />
        <p className="text">{text}</p>
        <div className="arrow-wrapper">
          <img src="/images/arrow-down.svg" alt="arrow" />
        </div>
      </div>
    </a>
  );
}
