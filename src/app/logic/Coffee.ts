class Coffee {
  type: string;
  rating: number;
  note: string;
  tastingRating: TastingRating;

  constructor(
    public name: string,
    public place: string,
    location: PlaceLocation) { }
}
