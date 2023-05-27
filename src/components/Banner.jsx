export default function Banner(props) {
  return (
    <div className="banner" style={{ backgroundImage: `url(${props.bgImg})` }}>
      <p className="banner-text">{props.slogan}</p>
    </div>
  );
}
