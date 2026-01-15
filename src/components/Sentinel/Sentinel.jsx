import { onMount, onCleanup } from 'solid-js';

const Sentinel = () => {
  let sentinel;

  onMount(() => {
    const observer = new IntersectionObserver(([entry]) => {
      document.body.toggleAttribute(
        'data-scrolled-at-top',
        entry.isIntersecting,
      );
    });

    observer.observe(sentinel);

    onCleanup(() => observer.disconnect());
  });

  return <div ref={sentinel} />;
};

export default Sentinel;
