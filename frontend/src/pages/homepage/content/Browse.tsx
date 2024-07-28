import Card from '../../../components/Card'
import { FaSearch } from 'react-icons/fa'

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
        <FaSearch className="basis-[20%] text-white text-[1.2rem] " />
      </div>
      <article className="mt-4">
        <div className=" mb-4">
          <h3>Select Level</h3>
        </div>
        <div>
          <select
            id="level"
            value={selectedLevel}
            onChange={handleSelectedLevel}
            className="block w-full p-2 border border-gray-300 rounded-md bg-transparent focus:border-indigo-500 focus:ring-indigo-500"
          >
            <option value="Beginner">Beginner</option>
            <option value="Senior">Senior</option>
          </select>
        </div>
      </article>
      <Card arrow={true} text="CATEGORIES" height="200px" />
      <Card arrow={true} text="CATEGORIES" height="200px" /> 
    </section>
  )
}

export default Browse
