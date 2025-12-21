import { StyleSheet } from "react-native";
import { moderateScale } from "react-native-size-matters";

const BASE_FONT_FAMILY_REGULAR = "Poppins-Regular";
const BASE_FONT_FAMILY_MEDIUM = "Poppins-Medium";
const BASE_FONT_FAMILY_SEMIBOLD = "Poppins-SemiBold";
const BASE_FONT_FAMILY_BOLD = "Poppins-Bold";
const LINE_HEIGHT_15 = moderateScale(15);
const LINE_HEIGHT_16 = moderateScale(16);
const LINE_HEIGHT_20 = moderateScale(20);
const LINE_HEIGHT_24 = moderateScale(24);
const LINE_HEIGHT_25 = moderateScale(25);
const LINE_HEIGHT_28 = moderateScale(28);
const LINE_HEIGHT_30 = moderateScale(30);
const LINE_HEIGHT_36 = moderateScale(36);
const FONT_WEIGHT_REGULAR = "400";
const FONT_WEIGHT_MEDIUM = "500";
const FONT_WEIGHT_SEMIBOLD = "600";
const FONT_WEIGHT_BOLD = "700";

const fonts = StyleSheet.create({
    body8regular: {
        fontFamily: BASE_FONT_FAMILY_REGULAR,
        fontSize: moderateScale(8),
        lineHeight: LINE_HEIGHT_15,
        fontStyle: "normal",
        fontVariant: ['tabular-nums'],
        fontWeight: FONT_WEIGHT_REGULAR,
    }, 
    body8medium: {
        fontFamily: BASE_FONT_FAMILY_MEDIUM,
        fontSize: moderateScale(8),
        lineHeight: LINE_HEIGHT_15,
        fontStyle: "normal",
        fontVariant: ['tabular-nums'],
        fontWeight: FONT_WEIGHT_MEDIUM,
    },
    body8semibold: {
        fontFamily: BASE_FONT_FAMILY_SEMIBOLD,
        fontSize: moderateScale(8),
        lineHeight: LINE_HEIGHT_15,
        fontStyle: "normal",
        fontVariant: ['tabular-nums'],
        fontWeight: FONT_WEIGHT_SEMIBOLD,
    },
    body8bold: {
        fontFamily: BASE_FONT_FAMILY_BOLD,
        fontSize: moderateScale(8),
        lineHeight: LINE_HEIGHT_15,
        fontStyle: "normal",
        fontVariant: ['tabular-nums'],
        fontWeight: FONT_WEIGHT_BOLD,
    },
    body12regular: {
        fontFamily: BASE_FONT_FAMILY_REGULAR,
        fontSize: moderateScale(12),
        lineHeight: LINE_HEIGHT_15,
        fontStyle: "normal",
        fontVariant: ['tabular-nums'],
        fontWeight: FONT_WEIGHT_REGULAR,
    },
    body12medium: {
        fontFamily: BASE_FONT_FAMILY_MEDIUM,
        fontSize: moderateScale(12),
        lineHeight: LINE_HEIGHT_15,
        fontStyle: "normal",
        fontVariant: ['tabular-nums'],
        fontWeight: FONT_WEIGHT_MEDIUM,
    },
    body12semibold: {
        fontFamily: BASE_FONT_FAMILY_SEMIBOLD,
        fontSize: moderateScale(12),
        lineHeight: LINE_HEIGHT_15,
        fontStyle: "normal",
        fontVariant: ['tabular-nums'],
        fontWeight: FONT_WEIGHT_SEMIBOLD,
    },
    body12bold: {
        fontFamily: BASE_FONT_FAMILY_BOLD,
        fontSize: moderateScale(12),
        lineHeight: LINE_HEIGHT_15,
        fontStyle: "normal",
        fontVariant: ['tabular-nums'],
        fontWeight: FONT_WEIGHT_BOLD,
    },
    body16regular: {
        fontFamily: BASE_FONT_FAMILY_REGULAR,
        fontSize: moderateScale(16),
        lineHeight: LINE_HEIGHT_15,
        fontStyle: "normal",
        fontVariant: ['tabular-nums'],
        fontWeight: FONT_WEIGHT_REGULAR,
    },
    body16medium: {
        fontFamily: BASE_FONT_FAMILY_MEDIUM,
        fontSize: moderateScale(16),
        lineHeight: LINE_HEIGHT_15,
        fontStyle: "normal",
        fontVariant: ['tabular-nums'],
        fontWeight: FONT_WEIGHT_MEDIUM,
    },
    body16semibold: {
        fontFamily: BASE_FONT_FAMILY_SEMIBOLD,
        fontSize: moderateScale(16),
        lineHeight: LINE_HEIGHT_15,
        fontStyle: "normal",
        fontVariant: ['tabular-nums'],
        fontWeight: FONT_WEIGHT_SEMIBOLD,
    },
    body16bold: {
        fontFamily: BASE_FONT_FAMILY_BOLD,
        fontSize: moderateScale(16),
        lineHeight: LINE_HEIGHT_15,
        fontStyle: "normal",
        fontVariant: ['tabular-nums'],
        fontWeight: FONT_WEIGHT_BOLD,
    },
});


