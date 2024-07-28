import Card from '../../../components/Card'
import { SearchIcon } from '../../../components/Icons'

type Browse = {
  selectedLevel: string
  handleSelectedLevel: (event: React.ChangeEvent<HTMLSelectElement>) => void
}
const Browse = (props: Browse) => {
  const selectedLevel = props.selectedLevel
  const handleSelectedLevel = props.handleSelectedLevel
  return (
    <section>
      <div className="flex w-full mt-4 bg-[#6C8EEF] items-center p-4 rounded-xl">
        <input
          type="text"
          className="w-full bg-transparent text-white outline-none border-none placeholder:text-white px-4"
          placeholder="Search Program"
        />

        <SearchIcon />
      </div>
      <article className="mt-4 mb-2">
        <h3 className="heading-1 font-bold mb-4 text-primary">Select Level</h3>
        <select
          id="level"
          value={selectedLevel}
          onChange={handleSelectedLevel}
          className="block w-full p-4 border border-gray-300 rounded-md bg-transparent focus:border-indigo-500 focus:ring-indigo-500"
        >
          <option value="Beginner">Beginner Level</option>
          <option value="Senior">Senior</option>
        </select>
      </article>
      <section className="mb-14">
        <Card arrow={true} text="CATEGORIES" height="200px" />
        <Card arrow={true} text="CATEGORIES" height="200px" />
      </section>
    </section>
  )
}

export default Browse
