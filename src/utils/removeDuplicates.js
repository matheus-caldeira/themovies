export default function removeDuplicates(array) {
  return array.filter((element, index, self) => {
    const findIndex = self.findIndex(el => el.id === element.id)

    return index === findIndex
  })

}