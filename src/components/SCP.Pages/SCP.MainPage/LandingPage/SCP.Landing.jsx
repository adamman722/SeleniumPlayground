import * as React from "react";
import DefaultCard from "../../SCP.DefaultCard/DefaultCard";
import Typography from "@mui/material/Typography";
export default function SCPLanding() {
  return (
    <DefaultCard>
      <Typography paragraph sx={{ fontSize: "1.5rem" }}>
        Welcome to the SCP Foundation, researcher. It has likely been a
        difficult journey to find yourself where you are today, having to be
        scouted out by people you've never met before and invited to exams and
        interviews for a position you were never fully told of. We can imagine
        you already have a few questions, whether it be where you are, who is
        here with you, or why you were chosen to be here. Many of these
        questions we will not be able to answer. Some of those, we will. In the
        interest of not making new personnel go through their first several
        weeks guessing what each task force, site, and acronym actually stands
        for, we have compiled all the information you'd reasonably need (and can
        be given) into a single automated message, sent to every new recruit's
        personal inbox. We recommend going over these at your earliest
        convenience.
      </Typography>
    </DefaultCard>
  );
}
