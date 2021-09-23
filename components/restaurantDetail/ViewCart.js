import React, { useState } from "react";
import { TouchableOpacity, View, Text, StyleSheet, Modal } from "react-native";
import { useSelector } from "react-redux";
import OrderItem from "./OrderItem";

export default function ViewCart() {
  const [modalVisible, setModalVisible] = useState(false);
  const { items, restaurantName } = useSelector(
    (state) => state.cartReducer.selectedItems
  );
  const total = items
    .map((item) => Number(item.price.replace("$", "")))
    .reduce((prev, curr) => prev + curr, 0);
  const totalUSD = total.toLocaleString("en", {
    style: "currency",
    currency: "USD",
  });

  const checkoutModalContent = () => {
    return (
      <>
        <View style={styles.modalContainer}>
          <View style={styles.modalCheckoutContainer}>
            <Text style={styles.restaurantName}>{restaurantName}</Text>
            {/* Order Item */}
            {items.map((item, index) => (
              <OrderItem key={index} item={item} />
            ))}
            <View style={styles.subtotalContainer}>
              <Text style={styles.subtotalTxt}>Subtotal: </Text>
              <Text>{totalUSD}</Text>
            </View>
            {/* Checkout Button */}
            <View style={styles.checkoutBtnContainer}>
              <TouchableOpacity
                style={styles.checkoutBtn}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.btnTxt}>Checkout</Text>
                <Text style={styles.total}>{total ? totalUSD : ""}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </>
    );
  };

  return (
    <>
      <Modal
        transparent
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        {checkoutModalContent()}
      </Modal>
      {total ? (
        <View style={styles.mainContainer}>
          <View style={styles.topContainer}>
            <TouchableOpacity
              style={styles.container}
              onPress={() => setModalVisible(true)}
            >
              <Text style={styles.text}>View Cart</Text>
              <Text style={styles.text}>{totalUSD}</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <></>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
    bottom: 130,
    zIndex: 999,
  },
  topContainer: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
  },
  container: {
    marginTop: 20,
    backgroundColor: "#000",
    justifyContent: "flex-end",
    padding: 15,
    borderRadius: 30,
    width: 300,
    position: "relative",
    flexDirection: "row",
  },
  text: {
    color: "#FFF",
    fontSize: 20,
    marginRight: 30,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.7)",
  },
  modalCheckoutContainer: {
    backgroundColor: "#FFF",
    padding: 16,
    height: 500,
    borderWidth: 1,
  },
  restaurantName: {
    textAlign: "center",
    fontWeight: "600",
    fontSize: 18,
    marginBottom: 10,
  },
  subtotalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },
  subtotalTxt: {
    textAlign: "left",
    fontWeight: "600",
    fontSize: 15,
    marginBottom: 10,
  },
  checkoutBtnContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  checkoutBtn: {
    marginTop: 20,
    backgroundColor: "#000",
    alignItems: "center",
    padding: 13,
    borderRadius: 30,
    width: 300,
    position: "relative",
  },
  btnTxt: {
    color: "#FFF",
    fontSize: 20,
  },
  total: {
    position: "absolute",
    right: 20,
    color: "#FFF",
    fontSize: 15,
    top: 17,
  },
});
