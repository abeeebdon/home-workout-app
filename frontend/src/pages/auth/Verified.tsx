import Button from '../../components/Button'

const Verified = () => {
  return (
    <section className="w-full flex justify-center items-center">
      <div className="p-2 w-full max-w-[400px] h-[100vh] flex flex-col justify-between py-[4rem]">
        <div className="flex justify-center p-8 bg-[#F7F9FC]">
          <img src="/images/email.svg" alt="Email icon" />
        </div>
        <div>
          <h2 className="text-[1.5rem] text-[#2C4BA0] font-semibold">
            Email confirmed
          </h2>
          <p className="text-4">
            Congratulations! Your email has been successfully confirmed. You're
            now ready to explore personalized workouts, track your progress, and
            connect with our vibrant fitness community. Get started on your
            fitness journey!
          </p>
        </div>
        <Button text="Get started" location="get-started" />
      </div>
    </section>
  )
}
export default Verified
