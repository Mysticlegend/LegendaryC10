
function toggleSpoilerAnimated(spoilerElement, isInvertedCollapse, isInvertedExpand, duration=300) {
  let spoilerBody = spoilerElement.querySelector('.spoiler-body');
  let isCollapsing = spoilerElement.classList.contains('expanded');
  let heightBefore = spoilerElement.offsetHeight;
  let offsetBefore = window.pageYOffset;
  spoilerElement.classList.toggle('expanded', !isCollapsing);
  let isScrollRequired = ( isCollapsing && isInvertedCollapse) ||
                         (!isCollapsing && isInvertedExpand );
  let scrollFunc = (isScrollRequired)
    ? () => {
      let heightNow = spoilerElement.offsetHeight;
      let heightDelta = heightNow - heightBefore;
      window.scrollTo(0, offsetBefore + heightDelta);
    }
    : undefined;
  $(spoilerBody).slideToggle({ duration: duration, progress: scrollFunc, complete: scrollFunc });
}

for (let el of document.querySelectorAll('.spoiler-btn-top')) {
  el.addEventListener('click', e => toggleSpoilerAnimated(el.parentNode));
}
for (let el of document.querySelectorAll('.spoiler-btn-bottom')) {
  el.addEventListener('click', e => toggleSpoilerAnimated(el.parentNode, true, true));
}
