import { makeAutoObservable } from "mobx"

export default class BackgroundStore {
    constructor() {
        this._backgroundImage=""
        this._bluredBackground=""

        makeAutoObservable(this)
    }

    get bluredBackground() {
        return this._bluredBackground
    }

    get backgroundImage() {
        return this._backgroundImage
    }

    setBackgroundImage(backgroundImage) {
        this._backgroundImage = backgroundImage
    }

    setBluredBackground(bluredBackground) {
        this._bluredBackground = bluredBackground
    }
}

