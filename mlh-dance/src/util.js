import { faker } from "@faker-js/faker";

export const getInstructors = (number) => {
  let styles = [
    "Hip Hop",
    "Salsa",
    "Ballet",
    "House",
    "Hip Hop",
    "Salsa",
    "Ballet",
    "House",
    "Hip Hop",
    "Salsa",
    "Ballet",
    "House",
  ];
  const instructors = [];
  let i = 1;
  while (i <= number) {
    const name = faker.name.findName();
    const email = faker.internet.email();
    const phone = faker.phone.phoneNumber();
    const image = faker.image.people(400, 600);
    let date = faker.date.between(
      "2015-01-01T00:00:00.000Z",
      "2022-01-01T00:00:00.000Z"
    );
    date = date.getMonth() + "/" + date.getDay() + "/" + date.getFullYear();

    instructors.push({
      id: i,
      name: name,
      email: email,
      phone: phone,
      image: image,
      date: date,
    });
    i++;
  }

  for (let i = 0; i < number; i++) {
    instructors[i].style = styles[i];
  }
  return instructors;
};
