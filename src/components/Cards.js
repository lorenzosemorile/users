export const Cards = ({cards}) => {

  return (
    <div className="cards cards__container">
      {cards.map(card => {
        const location = card.location;
        return (
          <div key={card.login.uuid} className="card">
            <img src={card.picture.large} alt={card.name.title} />
            <div className="card__information">
              <span className="card__name">{`${card.name.title} ${card.name.first} ${card.name.last}`}</span>
              <span className="card__email">{card.email}</span>
              <address>
                {location.street.number}, {location.street.name} - {location.country}
              </address>
            </div>
          </div>
        )
      })}
    </div>
  )
}