import Place from "./Place.js";

export class Facility extends Place {
    constructor(data, name, URL, google_maps, adress, postalcode, municipality) {
      super(adress, postalcode, municipality);
      this._data = data;
      this._name = name;
      this._URL = URL;
      this._google_maps = google_maps;
    }

    get data() {
        return this._data;
    }

    get name() {
        return this._name;
    }

    get URL() {
        return this._URL;
    }

    get google_maps() {
        return this._google_maps;
    }
}