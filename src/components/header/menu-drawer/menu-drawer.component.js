import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";

import { ReactComponent as RemoveIcon } from "../../../assets/cross.svg";
import { ReactComponent as CategoriesIcon } from "../../../assets/catalog.svg";
import { ReactComponent as BasketIcon } from "../../../assets/basket.svg";
import { ReactComponent as HelpIcon } from "../../../assets/help.svg";
import { ReactComponent as OrdersIcon } from "../../../assets/orders.svg";
import { ReactComponent as TruckIcon } from "../../../assets/truck.svg";
import { ReactComponent as AddressIcon } from "../../../assets/address.svg";
import { ReactComponent as BankIcon } from "../../../assets/creditCard.svg";
import { ReactComponent as SettingsIcon } from "../../../assets/settings.svg";
import { ReactComponent as GlobeIcon } from "../../../assets/globe.svg";
import { ReactComponent as ExitIcon } from "../../../assets/exit.svg";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  listItem: {
    color: "#15222F",
    opacity: 0.56,
  },
  removeIcon: {
    height: 24,
    width: 24,
  },
});

const iconsContainer = {
  Categories: <CategoriesIcon />,
  Basket: <BasketIcon />,
  Help: <HelpIcon />,
  Orders: <OrdersIcon />,
  "Recurring Delivery": <TruckIcon />,
  Addresses: <AddressIcon />,
  "Bank Cards": <BankIcon />,
  Settings: <SettingsIcon />,
};

const MenuDrawer = ({ toggleDrawer }) => {
  const classes = useStyles();
  return (
    <div
      className={classes.list}
      role="menuDrawer"
      onClick={toggleDrawer("left", false)}
      onKeyDown={toggleDrawer("left", false)}
    >
      <List>
        <ListItem button key={"logo"}>
          <ListItemIcon>
            <RemoveIcon className={classes.removeIcon} />
          </ListItemIcon>
          {/* <ListItemText primary={"Grasslands"} /> */}
          <span className="h4-mobile">Grasslands</span>
        </ListItem>
      </List>
      <List>
        {["Categories", "Basket", "Help"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{iconsContainer[text]}</ListItemIcon>
            <ListItemText primary={text} className={classes.listItem} />
          </ListItem>
        ))}
      </List>
      <List>
        {[
          "Orders",
          "Recurring Delivery",
          "Addresses",
          "Bank Cards",
          "Settings",
        ].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{iconsContainer[text]}</ListItemIcon>
            <ListItemText primary={text} className={classes.listItem} />
          </ListItem>
        ))}
      </List>
      <List>
        <ListItem button key={"langiage"}>
          <ListItemIcon>
            <GlobeIcon />
          </ListItemIcon>
          <ListItemText primary={"עברית"} className={classes.listItem} />
        </ListItem>
      </List>
      <List>
        <ListItem button key={"SignOut"}>
          <ListItemIcon>
            <ExitIcon />
          </ListItemIcon>
          <ListItemText primary={"Sign Out"} className={classes.listItem} />
        </ListItem>
      </List>
    </div>
  );
};

export default MenuDrawer;
