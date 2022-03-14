function ListenRipple(Element)
{
    function Ripple(Event)
    {
        const Element = Event.currentTarget;
        const Diameter = Math.max(Element.clientWidth, Element.clientHeight);

        const Ripple = document.createElement('span');
        Ripple.style.width = Ripple.style.height = `${Diameter}px`;
        Ripple.style.left = `${Event.clientX - Element.getBoundingClientRect().x - document.documentElement.getBoundingClientRect().x - Diameter / 2}px`;
        Ripple.style.top = `${Event.clientY - Element.getBoundingClientRect().y - document.documentElement.getBoundingClientRect().y - Diameter / 2}px`;
        Ripple.classList.add('Ripple');

        Element.appendChild(Ripple);
        setTimeout(() => Ripple.remove(), 750);
    }

    Element.addEventListener('click', Ripple);
}