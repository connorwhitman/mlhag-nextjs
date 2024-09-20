import Image from "next/image";
import Link from "next/link";
import ServiceMoffatt from "@/components/moffatt/services/ServiceMoffatt";

export const metadata = {
  title: "About Moffatt-Ladd House & Garden | History & People",
};

const AboutUs = () => {
  return (
    <div className="ptf-site-wrapper ptf-is--about-us">
      <div className="ptf-site-wrapper__inner">
        <div
          className="ptf-spacer"
          style={{ "--ptf-xxl": "6.25rem", "--ptf-md": "6.125rem" }}
        ></div>

        <div className="ptf-main">
          <div className="ptf-page">
            <div
              className="ptf-spacer"
              style={{ "--ptf-xxl": "4.25rem", "--ptf-md": "4.125rem" }}
            ></div>

            {/* === HERO === */}
            <section>
              <div className="container-xxl">
                <div
                  className="ptf-animated-block"
                  data-aos="fade"
                  data-aos-delay="0"
                >
                  <h1 className="large-heading text-center has-accent-1">
                    About Us
                  </h1>
                </div>
                <div
                  className="ptf-divider-center mt-1 mb-3"
                  style={{ "--ptf-width": "15%", "--ptf-height": "3px" }}
                ></div>
                <div
                  className="ptf-animated-block"
                  data-aos="fade"
                  data-aos-delay="50"
                >
                  <div className="col-6 offset-3">
                    <h2 className="fz-28 fz-18--md fw-bold text-uppercase has-accent-4 text-center">
                      Learn the history & Heritage of the Moffatt-Ladd House
                    </h2>
                  </div>
                </div>
              </div>
              <div className="col-12 mt-4">
                <Image
                  src="/assets/img/moffatt/molding-banner.jpg"
                  width={4096}
                  height={100}
                  alt="alt"
                  loading="lazy"
                />
              </div>
            </section>

            <div
              className="ptf-spacer"
              style={{ "--ptf-xxl": "3rem", "--ptf-md": "3rem" }}
            ></div>

            {/* === INTRO === */}
            <section>
              <div className="container">
                <div className="row">
                  <div className="col-8 offset-2">
                    <p className="fz-20">
                      The purpose of the Moffatt-Ladd House and Garden is to
                      interpret American, New Hampshire, and Portsmouth history
                      through the lives and possessions of the inhabitants of
                      the house, both free and enslaved.
                    </p>
                    <p className="fz-20">
                      The National Society of The Colonial Dames of America (NSCDA)
                      collects and preserves objects and manuscripts appropriate
                      to this history. The Moffatt-Ladd House is a National
                      Historic Landmark Building and a member of the Great
                      American Treasures program of NSCDA.
                    </p>
                    <p className="fz-20">
                      The Moffatt-Ladd House & Garden Museum has a rich history
                      spanning centuries, and involving incredible historical
                      figures who were pivotal and influential to both American
                      and Seacoast New England History.
                    </p>
                    <p className="fz-20">
                      Read on to learn some of our history, then:
                    </p>
                    <div
                      className="ptf-spacer"
                      style={{
                        "--ptf-xxl": "1.375rem",
                        "--ptf-md": "1.1875rem",
                      }}
                    ></div>
                    <div className="text-center">
                      <Link className="ptf-btn ptf-btn--primary" href="/visit">
                        Plan Your Visit!
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <div
              className="ptf-divider-center my-5"
              style={{
                "--ptf-width": "40%",
                "--ptf-height": "2px",
                "--ptf-color": "#222",
              }}
            ></div>

            <section>
              <div className="container">
                <div className="col-8 offset-2">
                  <h2 className="has-accent-4">Introduction</h2>

                  <div
                    className="ptf-spacer"
                    style={{ "--ptf-xxl": "2.5rem", "--ptf-md": "2.5rem" }}
                  ></div>

                  <div className="ptf-single-post__content">
                    <p>
                      The Moffatt-Ladd House was built between 1760 and 1763 for
                      the only son of John Moffatt, one of the wealthiest men in
                      the colony of New Hampshire prior to the Revolution.
                      Samuel and Sarah Catherine Moffatt were the first to live
                      in the house and they took up residence shortly after
                      their wedding in February 1764. They would be the
                      beginning of almost 150 years of the same family living in
                      the stately home on Fore Street (now Market Street),
                      overlooking the Piscataqua River. For more information
                      about each generation of family members, and their
                      servants–both enslaved and free, please click on the names
                      below.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <div
              className="ptf-divider-center my-5"
              style={{
                "--ptf-width": "40%",
                "--ptf-height": "2px",
                "--ptf-color": "#222",
              }}
            ></div>

            <section>
              <div className="container">
                <div className="col-8 offset-2">
                  <h2 className="has-accent-4">The Moffatts</h2>

                  <div
                    className="ptf-spacer"
                    style={{ "--ptf-xxl": "2.5rem", "--ptf-md": "2.5rem" }}
                  ></div>

                  <div className="ptf-single-post__content">
                    <p>
                      When John Moffatt (1691-1786) planned the house that his
                      son Samuel and his new bride would occupy, he hoped to
                      create a grand statement of the family’s wealth, position,
                      and sophistication. At the age of 70, John Moffatt could
                      look back upon a successful mercantile career. He came to
                      America as a ship captain engaged in the timber trade;
                      about 1724 he married a young woman of means named
                      Katharine Cutt (1700-1769), and through trade and land
                      speculation rose to become one of the wealthiest men in
                      the colony. Of their five children, four survived–three
                      daughters and one son. In young Samuel rested all of his
                      father’s hopes for the future.
                    </p>
                    <p>
                      John Moffatt employed the best Portsmouth craftsmen to
                      build the new mansion on Front Street (now Market Street).
                      Michael Whidden III billed Moffatt for bringing the
                      pre-cut frame “from ye warf” and raising it on a bluff
                      facing the river. Whidden lists the names of the eleven
                      joiners who worked with him on the house, the counting
                      house, shop, barn, and fences over the next three years.
                      Ebenezer Dearing’s bill enumerates the woodwork that he
                      carved for the house, including modillions, rosettes,
                      stair brackets, capitals used throughout the house, and
                      two chimney pieces, probably for the front parlor (now the
                      dining room) and the chamber above it. Raising the
                      three-story structure, the first house of its height in
                      Portsmouth, challenged the workmen because of the sharp
                      rise of the land. Made of red pine, probably cut from
                      Moffatt’s own forest land, the frame was adapted during
                      construction to create an unusual floor plan. Entering the
                      Great Hall, guests were welcomed into a grand room
                      stretching over more than one quarter of the first floor,
                      graced by a broad and sweeping staircase with an
                      exquisitely carved soffit panel.
                    </p>
                    <p>
                      At first, Samuel Moffatt and his young wife Sarah
                      Catherine did well. The floor plan of their house gave it
                      a particularly impressive entrance, one well suited to
                      lavish entertaining. They traveled through town in a
                      four-wheeled carriage, and their friends and Samuel’s
                      business associates were from the first families of the
                      colony.
                    </p>
                    <p>
                      Although some rooms were altered by later inhabitants of
                      the house, the Yellow or Best Chamber has been restored to
                      its appearance about 1765. The unusual wallpaper, with
                      open reserves imprinted with engravings from a series of
                      hunting scenes was in the latest fashion. There is no
                      doubt that a room so appointed and furnished en suite with
                      yellow damask bed hangings, window hangings, window
                      cushions, and upholstered furniture was intended to be
                      seen, and the room may have served as a retreat for the
                      women who attended the Moffatt’s parties.
                    </p>
                    <p>
                      Letters to Samuel from his father suggest that Samuel
                      lived lavishly and was not a good record keeper. These
                      letters, in conjunction with court documents, indicate
                      that Samuel was not an organized or disciplined merchant.
                      His informal approach to business sometimes led to
                      disastrous misunderstandings. He undertook several
                      shipping ventures, including an ill-fated voyage to Africa
                      to obtain slaves, with his brother-in-law Peter Livius.
                      When most of the enslaved cargo of the ship Triton died
                      during the passage to the West Indies, Livius declared
                      that his share of the cost of the voyage was a loan,
                      rather than an investment, and sued Samuel for his losses.
                      It was this lawsuit that finally caused Samuel’s financial
                      ruin. Plagued by his voracious brother-in-law’s
                      determination to exact his due, Samuel fled the colony
                      aboard the ship Diana in the company of his cousin William
                      Whipple. Whipple transported Samuel to the Dutch-held
                      island of St. Eustatius, where Samuel was able to escape
                      his creditors and work to re-build his fortune.
                    </p>
                    <p>
                      In a bold move designed to thwart Livius’s efforts, John
                      Moffatt sued Samuel for the amount he had advanced to his
                      son to establish his mercantile business. John had never
                      transferred the deed to the house to Samuel, so it was
                      Samuel’s moveable goods that were sold at auction to
                      satisfy his debt to his father. On June 29, 1768, Jonathan
                      Parker wrote to Samuel in St. Eustatius and reported that
                      the “Vendue was held in your Store, the Doors of the house
                      open for any Body to go in & look on the Furniture &c but
                      no Body went in save two or three in the front Room &
                      returned immediately — the whole Vessells & all, were
                      purchased by 8 or 9 different People on Accont of your
                      Father, so that he has inevitably secured your whole
                      Effects to himself in such an open fair Manner that there
                      can't be the least Reflection and all at the trifling
                      Expense of about £14 LM [legal money] and now the Czar
                      [Peter Livius] has no hold on any thing of yours.”
                    </p>
                    <p>
                      He went on to say, that Livius, though frustrated in his
                      attempts to sue Samuel directly, was “determined to get
                      his Money out of somebody” and “Has found a Law of this
                      Province made between 40 & 50 Years ago which says that
                      every Master or Commander of a Ship that carries any
                      Inhabitant out of the Province without giving Bond in the
                      Secretary’s Office shall be subject to a Fine & pay all
                      the Damages arising thereby.” Livius charged that William
                      Whipple, as commander of the ship Diana in which Samuel
                      fled from the colonies, had “subjected himself to this
                      Law.” When Captain Whipple returned to Portsmouth he was
                      “chagrined at finding a Stop put to his Business, for were
                      he & his Brother to go on with any other Affairs” Livius
                      might keep attaching their ships. The brothers dissolved
                      their partnership so that Joseph would be free to carry on
                      his business. William thereafter devoted himself to public
                      service.
                    </p>
                    <p>
                      It was not until May 1769 that Sarah Catherine Moffatt
                      left Portsmouth to join her husband in St. Eustatius,
                      taking her oldest child Betty, Mrs. Sparks, “the two
                      Negros & the boy James” with her. She left two of her
                      children behind with her sister-in-law Katharine Moffatt.
                      Katharine Moffatt split her time between caring for her
                      ailing mother at her parents’ house on Buck Street (now
                      State Street) and caring for her niece and nephew at her
                      brother’s mansion. After the death of her mother,
                      Katharine and her father took up residence in the newer
                      and more grand residence.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <div
              className="ptf-divider-center my-5"
              style={{
                "--ptf-width": "40%",
                "--ptf-height": "2px",
                "--ptf-color": "#222",
              }}
            ></div>

            <section>
              <div className="container">
                <div className="col-8 offset-2">
                  <h2 className="has-accent-4">The Whipples</h2>

                  <div
                    className="ptf-spacer"
                    style={{ "--ptf-xxl": "2.5rem", "--ptf-md": "2.5rem" }}
                  ></div>

                  <div className="ptf-single-post__content">
                    <p>
                      About one year after moving into the large house on Fore
                      Street (now Market Street) with her father, Katharine
                      Moffatt was quietly married to her cousin William Whipple.
                      The couple did not make the union public until well after
                      people began to notice that Katharine was pregnant, at
                      which point William Whipple joined the Moffatt household,
                      bringing with him an impressive array of sophisticated
                      furniture and his enslaved manservant, Prince. In 1773,
                      the couple lost their only child, William Jr., at the age
                      of eleven months. They raised their nephew John Tufton
                      Moffatt until he departed for Demarara in October 1779,
                      and their niece Mary Tufton (Polly) Moffatt until she
                      married Nathaniel Haven in 1786 at the age of 17. Due to
                      John Moffatt’s failing eyesight and advancing deafness, he
                      relied on his nephew and new son-in-law William Whipple to
                      take care of the property and to help him with his
                      business affairs. As William became increasingly embroiled
                      in the Revolutionary cause, some of these responsibilities
                      devolved upon Katharine, which proved her to be a savvy
                      businesswoman. Whipple served on Portsmouth’s Committee of
                      Safety, was on the delegation sent by the town of
                      Portsmouth to the new Revolutionary Assembly, and was
                      chosen as one of New Hampshire’s representatives to the
                      Continental Congress in which capacity he served from 1774
                      until 1779.
                    </p>

                    <p>
                      According to family legend, after signing the Declaration
                      of Independence William returned to Portsmouth with a
                      handful of horse chestnuts from Philadelphia, one of which
                      he and Prince planted in the yard in commemoration of his
                      participation in that momentous event. The tree is still
                      standing, some 234 years later. Whipple also held the rank
                      of Brigadier General of the First Brigade of New Hampshire
                      Militia. In 1777, he led the regiment to Saratoga and in
                      1778, he participated in the abortive Rhode Island
                      Campaign.
                    </p>
                    <p>
                      In November of 1779, Prince Whipple and Windsor Moffatt
                      (John Moffatt’s slave) joined eighteen other men who
                      described themselves as “native of Africa, now forcibly
                      detained in slavery” to petition the legislature of the
                      state of New Hampshire for their freedom. This petition
                      reveals that one or more of the petitioners was not only
                      literate, but well-versed in Revolutionary theory and
                      language. It is possible that this petitioner may have
                      been Prince Whipple, who accompanied William to
                      Philadelphia and undoubtedly overheard much of the
                      rhetoric of the Continental Congress. However, the New
                      Hampshire legislature denied the petition and the men were
                      not given their freedom.
                    </p>
                    <p>
                      Prince married Dinah Chase, a free woman in 1781, and in
                      late February 1784, William Whipple signed his official
                      manumission papers, allowing Prince to be a free man.
                      Prince continued to work for Katharine Whipple. In 1790
                      she purchased from Samuel Hobart a parcel of land facing
                      High Street that was adjacent to hers. She gave the use of
                      the lot to Prince and Cuffee Whipple and their wives Dinah
                      and Rebecca. Prince and Cuffee purchased a house and moved
                      it to the site. It was here that Dinah Chase Whipple and
                      Rebecca Whipple conducted the first African Ladies
                      Charitable School.
                    </p>
                    <p>
                      William Whipple retired from the Continental Congress in
                      1779, but he did not retire from public life. He continued
                      to serve in the state legislature and was appointed a
                      justice of the Superior Court. When he died in 1785 at the
                      age of only 54, his wife Katharine was devastated. She was
                      left without a husband of the first rank who was esteemed
                      by the entire community, and whom she loved very much. Her
                      father, very weak and feeble, still provided for her, but
                      she was aware that at 93 years of age, he could hardly
                      live much longer. With great foresight, she convinced her
                      father to convey to her a farm on the outskirts of town at
                      “the Plains” in 1779, and in 1784 she persuaded him to
                      bequeath to her the right to live in the mansion house for
                      sixteen years. When John Moffatt died in 1786, he stated
                      in his will that the house was entailed to Samuel
                      Moffatt’s eldest surviving son, Samuel R.C. Moffatt and
                      his heirs. Samuel’s wife, Sarah Catherine Moffatt,
                      received nothing, but bequests were made to the rest of
                      her children. The house that Sarah Catherine had been
                      living in was sold and she was forced to move. Katharine
                      had indeed made sure she was taken care of, perhaps to the
                      sacrifice of her sister-in-law.
                    </p>
                    <p>
                      Samuel and Sarah’s second daughter, Polly, had married
                      Nathaniel Haven in 1786 and it was Haven who immediately
                      began acting on behalf of his wife and his mother-in-law.
                      He raised questions about how John Moffatt’s estate was
                      being handled. The feud between Sarah Catherine Moffatt
                      and Katharine Moffatt Whipple simmered for several years
                      until Sarah’s death in 1802. Samuel’s children brought
                      suit against Katharine Whipple and eventually won their
                      case, with Nathaniel Haven acting as their proxy and the
                      famous orator Daniel Webster as a consulting lawyer. By
                      the time the affair was settled, Samuel R. C. Moffatt had
                      died, and his wife decided to sell the property. Nathaniel
                      Haven acquired the house in 1818 and the next year
                      conveyed it to his daughter Maria Tufton Haven Ladd, the
                      wife of the merchant Alexander Ladd, for one dollar. The
                      house and surrounding property would remain in the Ladd
                      family until 1911.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <div
              className="ptf-divider-center my-5"
              style={{
                "--ptf-width": "40%",
                "--ptf-height": "2px",
                "--ptf-color": "#222",
              }}
            ></div>

            <section>
              <div className="container">
                <div className="col-8 offset-2">
                  <h2 className="has-accent-4">The Ladds</h2>

                  <div
                    className="ptf-spacer"
                    style={{ "--ptf-xxl": "2.5rem", "--ptf-md": "2.5rem" }}
                  ></div>

                  <div className="ptf-single-post__content">
                    <p>
                      The Ladds made significant changes to the house. They
                      moved and added several buildings on the property,
                      including a warehouse situated on the working side of the
                      house, near the yard, most likely from a neighboring
                      property. Inside, they converted the Front Parlor into a
                      Dining Room with the addition of a sideboard niche and the
                      removal of closets. They also redecorated by papering the
                      walls of the Great Hall and staircase with a Federal
                      grisaille wallpaper by DuFour in the Vues d’Italie
                      pattern. The parlor was comfortably furnished in the
                      prevailing fashion with a marble-top pier table and glass,
                      a hair sofa and two large old armchairs, possibly from the
                      set of London-made furniture in the Chinese taste
                      purchased from the Wentworth estate by Nathaniel A. Haven
                      in 1794, and given to Maria by her mother after her father
                      died.
                    </p>
                    <p>
                      Alexander Ladd had wide-ranging civic interests and was an
                      accomplished writer. He was elected to the State
                      Legislature in 1826-27 and 1830, and held the city offices
                      of Selectman, Fire Ward, and Justice of the Peace. As
                      secretary for the two-hundredth anniversary of the
                      founding of Portsmouth in May 1823, he submitted his
                      proceedings for publication in the New Hampshire
                      Historical Society’s Collections. The parchment record of
                      the participants in the festivities includes both
                      Alexander’s and Maria’s signatures. The following year the
                      selectmen chose Alexander and two others as a delegation
                      to go to Boston to persuade the Marquis de Lafayette to
                      include Portsmouth in his tour of New England.
                    </p>
                    <p>
                      Maria Tufton Haven Ladd was educated at Miss Kimball’s
                      school, possibly in Portsmouth, and at the Berry School in
                      Boston. Maria was a well-educated woman who kept up with
                      the latest literature. She was the family curator,
                      lovingly preserving and labeling many items now in the
                      house’s collection, including the set of London-made
                      furniture in the Chinese taste seen in her portrait, and
                      her wedding dress, and several dresses of her daughters.
                    </p>
                    <p>
                      Maria and Alexander were married on December 29, 1807, and
                      quickly began a family. They would have 13 children over
                      the next 20 years, but only 5 of whom would live to
                      adulthood. Oddly enough, no child born in the large house
                      on Fore Street (now Market Street) would live to be an
                      adult.
                    </p>
                    <p>
                      Alexander died in 1855 and Maria in 1861. Maria left the
                      house to her daughters, but her son Alexander Hamilton
                      Ladd bought his sisters’ shares and assumed full ownership
                      of the house in late 1861. A.H. Ladd entered into
                      partnership with his brother Charles Haven Ladd and among
                      other ventures established Portsmouth’s only whale oil
                      refinery which operated from about 1836 through 1849. He
                      invested in the Portsmouth Pier Company and its whaling
                      ventures, and he and his brother were part owners of the
                      famous whaling ship the Ann Parry. One of the primary
                      investors in the Portsmouth Steam Factory for the
                      manufacture of cotton cloth, he opened a cotton brokerage
                      in Galveston, Texas, working on behalf of several New
                      England cotton mills, spending the winter months in
                      Galveston. His wife Elizabeth Jones Ladd died in 1865, and
                      in about 1875 A.H. retired from business and set up
                      housekeeping in Portsmouth on a full-time basis.
                    </p>
                    <p>
                      A.H. Ladd seemed to delight in modernizing the working
                      systems of the house. He constructed an extensive drainage
                      system under the house to deal with flooding in the
                      basement, and equipped his home with the latest in modern
                      conveniences including updated stoves, a patented earth
                      closet, and a combination refrigerator/ dumbwaiter
                      marketed as an “elevating refrigerator”.
                    </p>
                    <p>
                      His love of color he indulged in the beautiful terraced
                      formal garden behind the house. His mother’s letters
                      mention the garden, and references to it go back to the
                      first bills for the house, but it was A.H. Ladd who
                      immersed himself in his garden project with particular
                      intensity. He became an avid cultivator of tulips, and
                      kept beehives to ensure that his flowers would be properly
                      pollinated. In one year he complained that bad weather had
                      caused him to lose 60,000 of his bulbs.
                    </p>
                    <p>
                      In spite of the beauty that he brought to the house and
                      grounds, A.H. Ladd could not stay the decline of the port
                      of Portsmouth. As Portsmouth’s maritime trade diminished,
                      its dockyards became unpleasant places. Freight trains
                      pulled into the coal yards along the banks of the
                      Piscataqua River within a hundred yards of Ladd’s garden
                      oasis, and more than once he repelled would-be robbers.
                      His children tried to persuade him to give up the family
                      home, but A.H. Ladd insisted on protecting and preserving
                      the house as he was profoundly aware of the imports of the
                      house, and the family who had occupied it for more than a
                      century.
                    </p>
                    <p>
                      A.H. Ladd died on May 21, 1900. His children inherited the
                      family home, and for the next eleven years they maintained
                      it and used it on occasion; his daughter Elizabeth
                      Hamilton Ladd and her husband Charles Wentworth briefly
                      resided in the house, but no one chose to make it their
                      permanent home. In 1911, the heirs of A.H. Ladd offered
                      the house to The National Society of The Colonial Dames of
                      America in the State of New Hampshire to be preserved as a
                      museum and maintained as the group’s headquarters,
                      bringing an end to a nearly 150 year occupation of the
                      house by the same family.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <div
              className="ptf-divider-center my-5"
              style={{
                "--ptf-width": "40%",
                "--ptf-height": "2px",
                "--ptf-color": "#222",
              }}
            ></div>

            <ServiceMoffatt />

            <div
              className="ptf-spacer"
              style={{ "--ptf-xxl": "2.5rem", "--ptf-md": "2.5rem" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
