function AboutSection() {
  return (
    <div>
      <div className=" flex justify-center">
        <img
          className="m-auto w-11/12 sm:w-3/4"
          src="https://woodcreekbbq.com/wp-content/uploads/2020/12/food-2794603_1920.jpg"
          alt="food pick"
        />
      </div>
      <div className="space-y-3 mt-4 px-4">
        <h4 className="text-md font-semibold my-6">
          We create a natural jerkey with hickory, smoked Brisket beef made
          right here in the U.S.A.
        </h4>
        <p className="text-sm ">
          All of our beef jerky is made with NO added preservatives or MSG, no
          Nitrates, no fillers, and no binders of any kind. We also pride
          ourselfs in the fact that our jerky has a lower sodium content than
          most commercial jerky.{" "}
        </p>
        <p className="text-sm ">
          We always use the best ingredients and the highest quality BRISKET cut
          of beef. Plus, we marinate our jerkey for 4 days to produce an
          exceptional taste and tenderness that the jerky deserves.
        </p>
      </div>
    </div>
  );
}

export default AboutSection;
