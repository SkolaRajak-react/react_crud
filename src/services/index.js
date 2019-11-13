const musicList = [
  {
    id: 1,
    title: 'Song 1',
    vocals: 'Someone' 
  },
  {
    id: 2,
    title: 'Some other song',
    vocals: 'Other guy'
  },
  {
    id: 3,
    title: 'Despacito',
    vocals: 'Mehicans'
  }
]

export const sleep = m => new Promise(r => setTimeout(r, m))

export const fetchMusicList = () => {
  return musicList 
}
