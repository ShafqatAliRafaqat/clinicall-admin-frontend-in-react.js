import React from "react";
import * as Icon from "react-feather";
const navigationConfig = [
  {
    id: "dashboard",
    title: "Dashboard",
    type: "item",
    icon: <Icon.Home size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/",
    filterBase: "/",
  },
  {
    type: "groupHeader",
    groupTitle: "CliniCALL",
  },
  {
    id: "doctors",
    title: "Doctors",
    type: "item",
    icon: <i className="fas fa-stethoscope mr-1" width="20" height="20"></i>,
    permissions: ["admin", "editor"],
    navLink: "/doctors",
    filterBase: "/doctors",
  },
  {
    id: "organizations",
    title: "Organizations",
    type: "item",
    icon: <Icon.Globe size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/organizations",
    filterBase: "/organizations",
  },
  {
    id: "medicines",
    title: "Medicines",
    type: "item",
    icon: <Icon.PlusSquare size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/medicines",
    filterBase: "/medicines",
  },
  {
    id: "treatments",
    title: "Treatments",
    type: "item",
    icon: <Icon.PlusSquare size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/treatments",
    filterBase: "/treatments",
  },
  // {
  //   id: "assign_permissions",
  //   title: "Assign Permissions",
  //   type: "item",
  //   icon: <Icon.Lock size={20} />,
  //   permissions: ["admin", "editor"],
  //   navLink: "/assign-persmissions/:filter",
  //   filterBase: "/assign-persmissions",
  // },
  {
    id: "users",
    title: "Users",
    type: "item",
    icon: <Icon.User size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/users",
    filterBase: "/users",
  },
  {
    id: "permissions",
    title: "Permissions",
    type: "item",
    icon: <Icon.Shield size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/permissions",
    filterBase: "/permissions",
  },
  {
    id: "roles",
    title: "Roles",
    type: "item",
    icon: <Icon.UserCheck size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/roles",
    filterBase: "/roles",
  },
  {
    id: "Trash",
    title: "Trash",
    type: "collapse",
    icon: <Icon.Trash2 size={20} />,
    // badge: "warning",
    // badgeText: "2",
    children: [
      {
        id: "doctorArchive",
        title: "Doctors",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/archive/doctors",
      },
      {
        id: "medicineArchive",
        title: "Medicines",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/archive/medicines",
      },
      {
        id: "treatmentArchive",
        title: "Treatments",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/archive/treatments",
      },
      {
        id: "organizationArchive",
        title: "Organizations",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/archive/organizations",
      },
      {
        id: "permissionArchive",
        title: "Permissions",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/archive/permissions",
      },
      {
        id: "roleArchive",
        title: "Roles",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/archive/roles",
      },
      {
        id: "userArchive",
        title: "Users",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/archive/users",
      },
    ],
  },
];

export default navigationConfig;