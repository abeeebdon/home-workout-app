const HomePage = () => {
  return (
    <section className="p-4">
      <article className="flex justify-between mt-4">
        <div className="text-blue-500">
          <h2>Hi John!</h2>
          <p>Let’s get to work</p>
        </div>

        <div>
          <img src="/images/profile.png" alt="profile img" />
        </div>
      </article>
      <article className="mt-8">
        <div className="border rounded-lg border-blue-500 p-4 flex justify-around">
          <button>For You</button>
          <button>Browse</button>
          <button>Saved</button>
        </div>
      </article>
    </section>
  )
}

export default HomePage
