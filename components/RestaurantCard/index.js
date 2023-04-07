import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 180px;
  margin: 20px;
  background-color: white;
  border-radius: 5px;

  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.1);
`;

const Details = styled.div`
  padding: 20px;
`;

const Name = styled.h2`
  margin: 0;
`;

const Description = styled.p`
  margin: 10px 0 0 0;
`;

const Phone = styled.p`
  margin: 10px 0 0 0;
`;

const Rating = styled.p`
  margin: 10px 0 0 0;
`;

function RestaurantCard({ restaurant }) {
  const name = restaurant.name;
  const description = restaurant.formatted_address;
  const phone = restaurant.formatted_phone_number;
  const rating = restaurant.rating;

  return (
    <Card>
      <Details>
        <Name>{name}</Name>
        <Description>{description}</Description>
        <Phone>{phone}</Phone>
        <Rating>Rating: {rating}</Rating>
      </Details>
    </Card>
  );
}

export default RestaurantCard;
