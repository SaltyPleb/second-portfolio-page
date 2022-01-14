import { makeAutoObservable } from "mobx"

export default class BackgroundStore {
    constructor() {
        this._backgroundImage="/static/media/logo2.93d64970a0b3e45dc06e.jpg"
        
        makeAutoObservable(this)
    }

    get backgroundImage() {
        return this._backgroundImage
    }

    setBackgroundImage(backgroundImage) {
        this._backgroundImage = backgroundImage
    }
}

