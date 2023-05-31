/**
 * Banner component.
 *
 * @param {object} props - Component props.
 * @param {string} props.bgImg - Background image URL for the banner.
 * @param {string} props.slogan - Text slogan for the banner.
 * @returns {JSX.Element} - Rendered component.
 */
export default function Banner(props) {
  return (
    <div className="banner" style={{ backgroundImage: `url(${props.bgImg})` }}>
      <p className="banner-text">{props.slogan}</p>
    </div>
  );
}
