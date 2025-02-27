import Accordion from "components/Accordion";
import ScrollContainer from "react-indiana-drag-scroll";
import { styled } from "styled-components";
import { device } from "utils/device";

const Root = styled.div`
  padding: 130px 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  @media ${device.tablet} {
    padding: 74px 28px;
    overflow: hidden;
  }
`;

const StyledAccordion = styled(Accordion)`
  width: 100%;
  max-width: 700px;
  height: calc(100vh - 260px);
`;

const Faq = () => {
  return (
    <Root className="full">
      <ScrollContainer>
        <StyledAccordion
          data={faqs.map((d, index) => {
            return {
              ...d,
              title: (
                <span>
                  Q 0{index + 1}
                  <span style={{ marginLeft: 16, marginRight: 16 }}>
                    {d.title}
                  </span>
                </span>
              ),
            };
          })}
        />
      </ScrollContainer>
    </Root>
  );
};

export default Faq;

const faqs = [
  {
    id: 1,
    title: "What is the 010 OG Sneaker?",
    content:
      "The 010 OG Sneaker is the first release from our exclusive collection—available both as a digital NFT and a physical product. Crafted in Italy from premium leather, it blends cutting-edge technology with minimalist timeless design. An embedded NFC chip ensures tamper-proof authenticity, bridging the gap between digital ownership and real-world luxury. More than just a sneaker, it’s a statement of innovation, exclusivity, and the future of fashion.",
  },
  {
    id: 2,
    title: "How can I buy the 010 OG Sneaker?",
    content:
      "The **010 OG Sneaker** is only available by owning an NFT. You can mint the NFT on our platform or secure it on the secondary market. Once you hold it, you can redeem it for the physical sneaker, custom-produced just for you in Italy.This is just the beginning. The **010 OG Sneaker** will soon be available through select collaborations, offering new ways to experience the brand. Stay tuned.",
  },
  {
    id: 3,
    title: "How does the NFT for the 010 OG Sneaker work?",
    content:
      "The NFT serves as a digital proof of ownership for the sneaker. You will receive a unique, tamper-proof NFT stored on the blockchain. Once you're ready to receive the physical sneaker, you can exchange the NFT. It will be burned, reducing the total number of NFTs and increasing its long-term value.",
  },
  {
    id: 4,
    title: "Can I personalize the sneaker?",
    content:
      "Yes, you can make the **010 OG Sneaker** truly yours. With our nexrt-level configurator (launching after the mint, TBA), you control every detail—customizing multiple elements, selecting colors, and adding your initials or unique touches. Your sneaker. Your vision. Your journey. Once designed, it’s custom-made in Italy—exclusively for you.",
  },
  {
    id: 5,
    title: "What materials are used for the 010 OG Sneaker?",
    content:
      "The 010 OG Sneaker is made from premium leather, known for its durability and smooth, luxurious finish. It is manufactured in a specialized facility in Italy that focuses on high-quality sneaker production.",
  },
  {
    id: 6,
    title: "What makes the 010 OG Sneaker special?",
    content:
      "The 010 OG Sneaker combines minimalist design with innovative technology. Its jagged, pixelated pattern is reminiscent of retro gaming, while the built-in chip serves as a certificate of authenticity and offers additional features. With an NFT-based approach and a limited quantity of 10,000 units, the sneaker is not only a fashion statement but also a coveted collector's item.",
  },
  {
    id: 7,
    title: "How many 010 OG Sneakers are there?",
    content:
      "The 010 OG Sneaker is limited to 10,000 units. Each sneaker is numbered and linked to a unique NFT that guarantees its uniqueness and authenticity.",
  },
  {
    id: 8,
    title: "How much does the 010 OG Sneaker cost?",
    content:
      "The price of the sneaker is 489 USDT, converted to Solana (SOL) at the time of minting. The sneaker will only be available through ownership of the corresponding NFT.",
  },
  {
    id: 9,
    title: "Where is the 010 OG Sneaker manufactured?",
    content:
      "The 010 OG Sneaker is manufactured in a renowned factory in Italy that specializes in high-quality sneaker production. Only the best materials and cutting-edge technology are used here.",
  },
  {
    id: 10,
    title: "What sizes are available, and how do I provide my size?",
    content:
      "Once you exchange your NFT for the physical sneaker, you will go through an ordering process where you can specify your size and personalization options. The sneaker will then be custom-produced according to your preferences.",
  },
  {
    id: 11,
    title: "What are the benefits of the built-in chip in the sneaker?",
    content:
      "The built-in chip in the ****sneaker unlocks more than just authenticity—it’s your gateway to the 010-Family. After the NFT is exchanged, the chip activates additional features. Simply hold your smartphone near the sneaker to access a private website, where new experiences await and more will be revealed over time. Once you're in, you're part of the journey.",
  },
  {
    id: 12,
    title:
      "Are there special editions or limited variants of the 010 OG Sneaker?",
    content:
      "The **010 OG Sneaker** is strictly limited to **10,000 units**, each uniquely numbered and fully customizable—from color selection to personal details like your initials. To elevate the brand further, we’re also launching exclusive collaborations with select partners. These special edition drops will be pre-designed with renowned Artists, non-customizable, and exist outside the 10,000-unit collection—offering a rare, collectible edge to those who secure them.",
  },
  {
    id: 13,
    title: "Can I buy the sneaker without the NFT?",
    content:
      "No, the 010 OG Sneaker is only available through the NFT. You can either mint the NFT directly from us or buy it on the secondary market. The physical sneaker will only be available by exchanging the NFT.",
  },
  {
    id: 14,
    title: "How do I care for my 010 OG Sneaker?",
    content:
      "Since the sneaker is made of high-quality leather, we recommend using a leather care product to maintain the material's longevity and look. The rubber sole can be easily cleaned with a damp cloth.",
  },
];
