import libraryModel from "../../../DB/models/library.model.js"

export const getLibraries = async()=>{
    const library = await libraryModel.find({}).populate([
        {
            path: 'books'
        }
    ])
    return library
}