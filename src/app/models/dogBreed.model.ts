export class DogBreed {
    public breed: string;
    public subBreed: Array<string> = [];

    constructor(breed: string, subBreeds?: Array<string>) {
        this.breed = breed;
        this.subBreed = subBreeds || [];
    }
}
