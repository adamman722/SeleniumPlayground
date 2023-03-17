import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TestAccordion from "./TestAccordion";

function AccordionWidget(data) {
  return (
    <div>
      {/* THEORY WAS CORRECT we can do an accordion within and accordion, need to make extra drop down that is going to be a little psycho */}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
        <TestAccordion
          sampleText={"lorem Ipsum diads madis lepon"}
          number={1}
        />
        <TestAccordion
          sampleText={"lorem Ipsum diads madis lepon"}
          number={2}
        />
        <TestAccordion
          sampleText={"lorem Ipsum diads madis lepon"}
          number={3}
        />
        <TestAccordion
          sampleText={"lorem Ipsum diads madis lepon"}
          number={4}
        />
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Some extra Stuff</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Thermodynamics is a branch of physics that deals with heat, work,
            and temperature, and their relation to energy, entropy, and the
            physical properties of matter and radiation. The behavior of these
            quantities is governed by the four laws of thermodynamics which
            convey a quantitative description using measurable macroscopic
            physical quantities, but may be explained in terms of microscopic
            constituents by statistical mechanics. Thermodynamics applies to a
            wide variety of topics in science and engineering, especially
            physical chemistry, biochemistry, chemical engineering and
            mechanical engineering, but also in other complex fields such as
            meteorology. Historically, thermodynamics developed out of a desire
            to increase the efficiency of early steam engines, particularly
            through the work of French physicist Sadi Carnot (1824) who believed
            that engine efficiency was the key that could help France win the
            Napoleonic Wars.[1] Scots-Irish physicist Lord Kelvin was the first
            to formulate a concise definition of thermodynamics in 1854[2] which
            stated, "Thermo-dynamics is the subject of the relation of heat to
            forces acting between contiguous parts of bodies, and the relation
            of heat to electrical agency." Rudolf Clausius restated Carnot's
            principle known as the Carnot cycle and gave so the theory of heat a
            truer and sounder basis. His most important paper, "On the Moving
            Force of Heat",[3] published in 1850, first stated the second law of
            thermodynamics. In 1865 he introduced the concept of entropy. In
            1870 he introduced the virial theorem, which applied to heat.[4] The
            initial application of thermodynamics to mechanical heat engines was
            quickly extended to the study of chemical compounds and chemical
            reactions. Chemical thermodynamics studies the nature of the role of
            entropy in the process of chemical reactions and has provided the
            bulk of expansion and knowledge of the field. Other formulations of
            thermodynamics emerged. Statistical thermodynamics, or statistical
            mechanics, concerns itself with statistical predictions of the
            collective motion of particles from their microscopic behavior. In
            1909, Constantin Carathéodory presented a purely mathematical
            approach in an axiomatic formulation, a description often referred
            to as geometrical thermodynamics.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default AccordionWidget;
