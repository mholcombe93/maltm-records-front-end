import api from "./apiConfig.js";

import Artist from "../models/Artist.js"

export const getArtists = async (req, res) => {
  try {
    const artists = await Artist.find()
    res.json(artists)

  } catch (error) {
    console.error(error)
    res.status(500).json({error: error.message})
  }
}

export const getArtist = async (req, res) => {
  try {
    const { id } = req.params
    const artist = await Artist.findById(id)

    if (artist) {
      return res.json(artist)
    }

    res.status(404).json({message: "Artist not found!"})
  
  } catch (error) {
    console.error(error)
    res.status(500).json({error: error.message})
  }
}

export const getArtistName = async (req, res) => {
  try {
    const { name } = req.params
    const artist = await Artist.find({name: name})

    if (artist) {
      return res.json(artist)
    }

    res.status(404).json({message: "Artist not found!"})
  
  } catch (error) {
    console.error(error)
    res.status(500).json({error: error.message})
  }
}

export const getArtistGenre = async (req, res) => {
  try {
    const { genre } = req.params
    const artist = await Artist.find({genre: genre})

    if (artist) {
      return res.json(artist)
    }

    res.status(404).json({message: "Artist not found!"})
  
  } catch (error) {
    console.error(error)
    res.status(500).json({error: error.message})
  }
}

export const createArtist = async (req, res) => {
  try {
    const artist = new Artist(req.body)
    await artist.save()
    res.status(201).json(artist)

  } catch (error) {
    console.error(error)
    res.status(500).json({error: error.message})
  }
}

export const updateArtist = async (req, res) => {
  try {
    const { id } = req.params
    const artist = await Artist.findByIdAndUpdate(id, req.body)
    res.status(201).json(artist)

  } catch (error) {
    console.error(error)
    res.status(500).json({error: error.message})
  }
}

export const updateArtistName = async (req, res) => {
  try {
    const { name } = req.params
    const artist = await Artist.findOneAndUpdate({ name:  name}, req.body)
    res.status(201).json(artist)

  } catch (error) {
    console.error(error)
    res.status(500).json({error: error.message})
  }
}

export const deleteArtist = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Artist.findByIdAndDelete(id)

    if (deleted) {
      return res.status(200).send("Artist deleted!")
    }

    throw new Error("Artist not found")
    
  } catch (error) {
    console.error(error)
    res.status(500).json({error: error.message})
  }
}

export const deleteArtistName = async (req, res) => {
  try {
    const { name } = req.params
    const deleted = await Artist.findOneAndDelete({name: name})

    if (deleted) {
      return res.status(200).send("Artist deleted!")
    }

    throw new Error("Artist not found")
    
  } catch (error) {
    console.error(error)
    res.status(500).json({error: error.message})
  }
}

// Albums

export const getAlbums = async (req, res) => {
  try {
    const albums = await Album.find()
    res.json(albums)

  } catch (error) {
    console.error(error)
    res.status(500).json({error: error.message})
  }
}


export const getAlbumTitle = async (req, res) => {
  try {
    const { title } = req.params
    const album = await Album.find({title: title})

    if (album) {
      return res.json(album)
    }

    res.status(404).json({message: "Album not found!"})
  
  } catch (error) {
    console.error(error)
    res.status(500).json({error: error.message})
  }
}

export const createAlbum = async (req, res) => {
  try {
    const album = new Album(req.body)
    await album.save()
    res.status(201).json(album)

  } catch (error) {
    console.error(error)
    res.status(500).json({error: error.message})
  }
}

export const updateAlbum = async (req, res) => {
  try {
    const { id } = req.params
    const album = await Album.findByIdAndUpdate(id, req.body)
    res.status(201).json(album)

  } catch (error) {
    console.error(error)
    res.status(500).json({error: error.message})
  }
}

export const updateAlbumTitle = async (req, res) => {
  try {
    const { title } = req.params
    const album = await Album.findOneAndUpdate({ title:  title}, req.body)
    res.status(201).json(album)

  } catch (error) {
    console.error(error)
    res.status(500).json({error: error.message})
  }
}

export const deleteAlbum = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Album.findByIdAndDelete(id)

    if (deleted) {
      return res.status(200).send("Album deleted!")
    }

    throw new Error("Album not found")
    
  } catch (error) {
    console.error(error)
    res.status(500).json({error: error.message})
  }
}

export const deleteAlbumTitle = async (req, res) => {
  try {
    const { title } = req.params
    const deleted = await Album.findOneAndDelete({title: title})

    if (deleted) {
      return res.status(200).send("Album deleted!")
    }

    throw new Error("Album not found")
    
  } catch (error) {
    console.error(error)
    res.status(500).json({error: error.message})
  }
}