// import { StyleSheet, Text, View, Image,TextInput, ScrollView,Button, TouchableOpacity } from 'react-native'
// import React from 'react'
// import { ScreenStackHeaderConfig } from 'react-native-screens'
// import  { useState, useEffect } from 'react';


// import NavFooter from './navFooter'

// export default function Store() {
//     const [products, setProducts] = useState([]);

//     useEffect(() => {
//         fetchProductData();
//     }, []);

//     const fetchProductData = async () => {
//         try {
//         const response = await fetch('http://10.74.76.17/api/product.php');
//         const data = await response.json();
        
//         setProducts(data);
//         } catch (error) {
//         console.error('Error fetching product data:', error);
//         }
//     };


//   return (
//     <View style={styles.container}>

//         {/* this constitute the cart, the search bar and the menu icon at the top of the screen */}
//         <View style={styles.serviceHeader}>
//             <TextInput placeholder='Search Items' style= {{borderWidth: 1, flex: 2, borderRadius: 5,padding: 5, borderColor: '#1BCDCD' }}/>
//             <TouchableOpacity style={{elevation: 5, }}>
//                 <Button title={'CART ITEMS ( 2 )'} color={'#1BCDCD'} />
//             </TouchableOpacity>
//         </View>





//         {/* <ScrollView style={styles.productHorizontalScroll} horizontal={true}>
//         {products.map((product, index) => (
//           <View style={styles.productItem} key={index}>
//             <Image source={{ uri: 'data:image/jpeg;base64,' + product.image }} style={styles.productImage} />

//             <View style={styles.productInfo}>
//               <Text style={styles.productName}>{product.name}</Text>
//               <Text style={styles.productBrand}>Brand: {product.brand}</Text>
//               <Text style={styles.productPrice}>GHC {product.price}</Text>
//             </View>
//           </View>
//         ))}
//       </ScrollView> */}






//  <ScrollView style={styles.productView} >


//             {/* THIS SECTION RETRIEVES PRODUCTS IN THE STORAGE DEVICES CATEGORY */}
//             {/* THIS SECTION RETRIEVES PRODUCTS IN THE STORAGE DEVICES CATEGORY */}
//             {/* THIS SECTION RETRIEVES PRODUCTS IN THE STORAGE DEVICES CATEGORY */}
//             {/* THIS SECTION RETRIEVES PRODUCTS IN THE STORAGE DEVICES CATEGORY */}

//             <Text style={styles.productCategory}>STORAGE DEVICES</Text>

//                 <ScrollView style={styles.productHorizontalScroll} horizontal={true}>

//                     {products.map((product, index) => (
//                     <View style={styles.productItem} key={index}>
//                         <Image source={{ uri: 'data:image/jpeg;base64,' + product.image }} style={styles.productImage} />

//                         <View style={styles.productInfo}>
//                         <Text style={styles.productName}>{product.name}</Text>
//                         <Text style={styles.productBrand}>Brand: {product.brand}</Text>
//                         <Text style={styles.productPrice}>GHC {product.price}</Text>
//                         </View>
//                     </View>
//                     ))}



//                 </ScrollView>








//                 {/* THIS SECTION RETRIEVES PRODUCTS IN THE INTERNAL PART CATEGORY */}
//                 {/* THIS SECTION RETRIEVES PRODUCTS IN THE INTERNAL PART CATEGORY */}
//                 {/* THIS SECTION RETRIEVES PRODUCTS IN THE INTERNAL PART CATEGORY */}
//                 {/* THIS SECTION RETRIEVES PRODUCTS IN THE INTERNAL PART CATEGORY */}

//                 <Text style={styles.productCategory}>INTERNAL PARTS / UPGRADE</Text>
                
//                 <ScrollView style={styles.productHorizontalScroll} horizontal={true}>
                        
//                     {products.map((product, index) => (
//                     <View style={styles.productItem} key={index}>
//                         <Image source={{ uri: 'data:image/jpeg;base64,' + product.image }} style={styles.productImage} />

//                         <View style={styles.productInfo}>
//                         <Text style={styles.productName}>{product.name}</Text>
//                         <Text style={styles.productBrand}>Brand: {product.brand}</Text>
//                         <Text style={styles.productPrice}>GHC {product.price}</Text>
//                         </View>
//                     </View>
//                     ))}

//                 </ScrollView>










//                 {/* THIS SECTION RETRIEVES PRODUCTS IN THE LATOPS CATEGORY */}
//                 {/* THIS SECTION RETRIEVES PRODUCTS IN THE LATOPS CATEGORY */}
//                 {/* THIS SECTION RETRIEVES PRODUCTS IN THE LATOPS CATEGORY */}
//                 {/* THIS SECTION RETRIEVES PRODUCTS IN THE LATOPS CATEGORY */}


//                 <Text style={styles.productCategory}>PC's & MAC</Text>
//                 <ScrollView style={styles.productHorizontalScroll} horizontal={true}>
                    
//                 {products.map((product, index) => (
//                     <View style={styles.productItem} key={index}>
//                         <Image source={{ uri: 'data:image/jpeg;base64,' + product.image }} style={styles.productImage} />

//                         <View style={styles.productInfo}>
//                         <Text style={styles.productName}>{product.name}</Text>
//                         <Text style={styles.productBrand}>Brand: {product.brand}</Text>
//                         <Text style={styles.productPrice}>GHC {product.price}</Text>
//                         </View>
//                     </View>
//                     ))}

//                 </ScrollView>
//         </ScrollView> 




//         <NavFooter/>  
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//     container:{
//         flex: 1,
//         backgroundColor: '#CBE4E4',
//         alignItems: 'center',
//         justifyContent: 'center',
        
//     },
//     serviceHeader:{
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         padding: 10,
//         gap: 10,
//         elevation: 5
//     },
//     // productView:{
//     //     backgroundColor: 'transparent',
//     //     marginBottom: 70
        

//     // },
//     productHorizontalScroll:{
//        marginBottom: 10,
//        paddingHorizontal: 10,

//     },



//     productItem:{
//         height: 200,
//         width: 180,
//         borderRadius: 10,
//         elevation: 5,
//         marginRight:20,
//         marginVertical: 5,

//     },
//     productInfo:{
//         width: 180,
//         height: 65,
//         backgroundColor: '#353638',
//         position: 'absolute',
//         bottom: 0,
//         padding: 10,
//         borderBottomLeftRadius: 10,
//         borderBottomRightRadius: 10,

//     },
//     productName: {
//         color: '#fff',
//         fontSize: 10,
//         fontWeight: 'bold',
//     },

//     productBrand: {
//         color: '#fff',
//         fontSize: 10,
//     },

//     productPrice: {
//         color: '#1BCDCD'
//     },

//     productImage:{
//         width:180,
//         height: 135,
//         borderTopRightRadius: 10,
//         borderTopLeftRadius: 10,
//         resizeMode: 'stretch',
//     },

//     productCategory: {
//         backgroundColor: '#181F20',
//         color: '#fff',
//         paddingVertical: 10,
//         paddingHorizontal: 20,
//         marginBottom:10,
//         marginTop: 30,
//         marginHorizontal: 0,
//         fontWeight: 'bold',
//         fontSize: 20
//     }

// })








































// import { StyleSheet, Text, View, Image, TextInput, ScrollView, Button, TouchableOpacity, Modal } from 'react-native';
// import React, { useState, useEffect } from 'react';

// import NavFooter from './navFooter';
// import { endEvent } from 'react-native/Libraries/Performance/Systrace';

// export default function Store() {
//     const [products, setProducts] = useState([]);
//     const [category, setCategory] = useState(''); // State to store the selected category
//     const [selectedProduct, setSelectedProduct] = useState(null);
//     const [isModalVisible, setIsModalVisible] = useState(false);
//     const [cartItems, setCartItems] = useState([]);
//     const [quantity, setQuantity] = useState(0);



//     useEffect(() => {
//         // Fetch products when the component mounts
//         fetchProductData();
//     }, [category]);

//     const fetchProductData = async () => {
//         try {
//             const response = await fetch(`http://10.74.76.17/api/product.php?category=${category}`);
//             const data = await response.json();
//             setProducts(data);
//         } catch (error) {
//             console.error('Error fetching product data:', error);
//         }
//     };

//     const handleCategoryChange = (selectedCategory) => {
//         // Update the category state when a category is selected
//         setCategory(selectedCategory);
//     };


//     const handleProductPress = (product) => {
//         setSelectedProduct(product);
//         setIsModalVisible(true);
//     };





//     const handleCartQuantity = (product, quantityToAdd) => {
//         // Check if the product is already in the cart
//         const productIndex = cartItems.findIndex((item) => item.id === product.id);

//         if (productIndex !== -1) {
//             // If the product is already in the cart, update its quantity
//             const updatedCart = [...cartItems];
//             updatedCart[productIndex].quantity += quantityToAdd;

//             // Remove the product from the cart if the quantity becomes zero
//             if (updatedCart[productIndex].quantity === 0) {
//                 updatedCart.splice(productIndex, 1);
//             }

//             setCartItems(updatedCart);
//         } else {
//             // If the product is not in the cart, add it as a new item with the specified quantity
//             setCartItems([...cartItems, { ...product, quantity: quantityToAdd }]);
//         }
//     };

//     // Function to handle subtracting from cart
//     const subCart = (product) => {
//         handleCartQuantity(product, -1);
//     };

//     // Function to handle adding to cart
//     const addCart = (product) => {
//         handleCartQuantity(product, 1);
//     };

//     // Function to get the quantity of a product in the cart
//     const getCartQuantity = (product) => {
//         const cartItem = cartItems.find((item) => item.id === product.id);
//         return cartItem ? cartItem.quantity : 0;
//     };

//     const addCounter = () => {
//         setQuantity((prevQuantity) => prevQuantity + 1);
//       };
    
//       const subCounter = () => {
//         if (quantity > 0) {
//           setQuantity((prevQuantity) => prevQuantity - 1);
//         }
//       };

//     return (
//         <View style={styles.container}>
//             {/* this constitute the cart, the search bar and the menu icon at the top of the screen */}
//             <View style={styles.serviceHeader}>
//                 <TextInput placeholder='Search Items' style={{ borderWidth: 1, flex: 2, borderRadius: 5, padding: 5, borderColor: '#1BCDCD' }} />
//                 <TouchableOpacity style={{ elevation: 5 }}>
//                     <Button title={'CART ITEMS ( 0 )'} color={'#1BCDCD'} />
//                 </TouchableOpacity>
//             </View>

//             {/* Add buttons for each category */}
//             <View style={styles.categoryButtons}>
//                 <TouchableOpacity onPress={() => handleCategoryChange('storage')} style= {styles.categoryButton}>
//                     <Text style={category === 'storage' ? styles.activeCategory : styles.category}>Storage</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity onPress={() => handleCategoryChange('internal')}  style= {styles.categoryButton}>
//                     <Text style={category === 'internal' ? styles.activeCategory : styles.category}>Internal</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity onPress={() => handleCategoryChange('laptop')}  style= {styles.categoryButton}>
//                     <Text style={category === 'laptop' ? styles.activeCategory : styles.category}>Laptop</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity onPress={() => handleCategoryChange('accessories')}  style= {styles.categoryButton}>
//                     <Text style={category === 'accesories' ? styles.activeCategory : styles.category}>accessories</Text>
//                 </TouchableOpacity>
//             </View>

            
//             <ScrollView style={styles.productView} horizontal={true}>
//                 {/* Map over the products array and render each product item */}
//                 {products.map((product, index) => (
//                     <TouchableOpacity style={styles.productItem} key={index} onPress={()=> handleProductPress(product)}>
//                         {/* <View > */}
//                         <Image source={{ uri: 'data:image/jpeg;base64,' + product.image }} style={styles.productImage} />

//                         <View style={styles.productInfo}>
//                             <Text style={styles.productName}>{product.name}</Text>
//                             <Text style={styles.productBrand}>Brand: {product.brand}</Text>
//                             <Text style={styles.productPrice}>GHC {product.price}</Text>
//                         </View>
//                     {/* </View> */}
//                     </TouchableOpacity>

                    
//                 ))}
//             </ScrollView>
//             {/* Pop-up View */}
//             <Modal
//                 animationType="slide"
//                 transparent={true}
//                 visible={isModalVisible}
//                 onRequestClose={() => setIsModalVisible(false)}
//             >
//                 <View style={styles.modalView}>
//                     <View style={styles.modalContent}>
//                         {selectedProduct && (
//                             <>
//                             <Image source={{ uri: 'data:image/jpeg;base64,' + selectedProduct.image }} style={styles.modalProductImage} />
//                                 <Text style={styles.modalProductName}>{selectedProduct.name}</Text>
//                                 <Text style={styles.modalProductBrand}>{selectedProduct.brand}</Text>
//                                 <Text style={styles.modalProductBrand}>{selectedProduct.description}</Text>
//                                 <Text style={styles.modalProductPrice}>GHC {selectedProduct.price}</Text>
//                                 {/* Add other details you want to display */}
//                             </>
//                         )}
//                         <TouchableOpacity style={styles.modalCloseButton} onPress={() => setIsModalVisible(false)}>
//                             <Text style={styles.modalCloseButtonText}>X</Text>
//                         </TouchableOpacity>


//                         {/* this is the code for the cart manipulation */}
//                         <View style= {{width: 200, flexDirection: 'row',justifyContent: 'center', alignItems: 'center', gap: 20 }}>
//                         <TouchableOpacity style={styles.modalAddToCart} onPress={() => subCounter()}>
//                             <Text style={styles.modalCloseButtonText}>-</Text>
//                         </TouchableOpacity>
//                         <View style={styles.modalAddToCart}><Text>0</Text></View>
//                         <TouchableOpacity style={styles.modalAddToCart} onPress={() => addCounter()}>
//                             <Text style={styles.modalCloseButtonText}>+</Text>
//                         </TouchableOpacity>
//                         </View>

//                         <TouchableOpacity style={{backgroundColor: 'rgba(0, 0, 0, 0.8)', width: 300, padding: 10, borderRadius: 5, justifyContent: 'center', alignItems: 'center', marginTop: 20}} onPress={() => addToCart()}>
//                             <Text style={styles.modalCloseButtonText}>ADD TO CART</Text>
//                         </TouchableOpacity>
//                     </View>
//                 </View>
//             </Modal>

//             <NavFooter />
//         </View>
//     );
// }



// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#CBE4E4',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     serviceHeader: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         padding: 10,
//         gap: 10,
//         elevation: 5,
//     },
//     categoryButtons: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         marginBottom: 10,
//         gap: 10,

//     },
// categoryButton: {
//     backgroundColor: '#000',
//     padding: 10,
//     borderRadius: 5,
//     elevation: 5,

// },

//     category: {
//         color: '#fff',
//         fontSize: 16,
//         fontWeight: 'bold',
//     },
//     activeCategory: {
//         color: '#1BCDCD',
//         fontSize: 16,
//         fontWeight: 'bold',
//     },
//     productView: {
//         backgroundColor: 'transparent',
//         marginBottom: 70,
//         paddingHorizontal: 10
//     },
//     productItem: {
//         height: 180,
//         width: 180,
//         borderRadius: 10,
//         elevation: 5,
//         marginRight: 20,
//         marginVertical: 5,
//     },
//     productInfo: {
//         width: 180,
//         height: 55,
//         backgroundColor: '#353638',
//         position: 'absolute',
//         bottom: 0,
//         padding: 10,
//         borderBottomLeftRadius: 10,
//         borderBottomRightRadius: 10,
//     },
//     productName: {
//         color: '#fff',
//         fontSize: 10,
//         fontWeight: 'bold',
//     },
//     productBrand: {
//         color: '#fff',
//         fontSize: 10,
//     },
//     productPrice: {
//         color: '#1BCDCD',
//     },
//     productImage: {
//         width: 180,
//         height: 140,
//         borderTopRightRadius: 10,
//         borderTopLeftRadius: 10,
//         resizeMode: 'stretch',
//     },
//     productCategory: {
//         backgroundColor: '#181F20',
//         color: '#fff',
//         paddingVertical: 10,
//         paddingHorizontal: 20,
//         marginBottom: 10,
//         marginTop: 30,
//         marginHorizontal: 0,
//         fontWeight: 'bold',
//         fontSize: 20,
//     },





//     modalView: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: 'rgba(0, 0, 0, 0.7)',
//     },

//     modalContent: {
//         backgroundColor: '#CBE4E4',
//         padding: 20,
//         borderRadius: 10,
//         alignItems: 'center',
//         width: '90%',
//         height: '80%',
//     },
// modalProductImage: {
//     width: 300,
//     height: 300,
//     borderTopRightRadius: 10,
//     borderTopLeftRadius: 10,
//     resizeMode: 'stretch',
//     elevation: 5,

// },

//     modalProductName: {
//         fontSize: 20,
//         fontWeight: 'bold',
//         marginBottom: 10,
//     },

//     modalProductBrand: {
//         fontSize: 16,
//         marginBottom: 5,
//     },

//     modalProductPrice: {
//         fontSize: 18,
//         color: '#1BCDCD',
//         marginBottom: 20,
//     },

//     modalCloseButton: {
//         backgroundColor: 'rgba(0, 0, 0, 0.8)',
//         padding: 10,
//         borderRadius: 50,
//         position: 'absolute',
//         right: 0,
//         width: 40,
//         height: 40,
//         justifyContent: 'center',
//         alignItems: 'center',

//     },

//     modalCloseButtonText: {
//         color: '#fff',
//         fontSize: 16,
//         fontWeight: 'bold',
//     },


//     modalAddToCart: {
//         backgroundColor: 'rgba(0, 0, 0, 0.8)',
//         padding: 10,
//         borderRadius: 5,
//         right: 0,
//         width: 50,
//         height: 40,
//         justifyContent: 'center',
//         alignItems: 'center',
//         // elevation: 5,
//     }
// });








































import { StyleSheet, Text, View, Image, TextInput, ScrollView, Button, TouchableOpacity, Modal } from 'react-native';
import React, { useState, useEffect } from 'react';

import NavFooter from './navFooter';

export default function Store() {
    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState(''); // State to store the selected category
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [quantity, setQuantity] = useState(0);

    useEffect(() => {
        // Fetch products when the component mounts
        fetchProductData();
    }, [category]);

    const fetchProductData = async () => {
        try {
            const response = await fetch(`http://10.74.76.17/product.php?category=${category}`);
            const data = await response.json();
            setProducts(data);
        } catch (error) {
            console.error('Error fetching product data:', error);
        }
    };

    const handleCategoryChange = (selectedCategory) => {
        // Update the category state when a category is selected
        setCategory(selectedCategory);
    };

    const handleProductPress = (product) => {
        setSelectedProduct(product);
        setIsModalVisible(true);
    };

    const handleCartQuantity = (product, quantityToAdd) => {
        // Check if the product is already in the cart
        const productIndex = cartItems.findIndex((item) => item.id === product.id);

        if (productIndex !== -1) {
            // If the product is already in the cart, update its quantity
            const updatedCart = [...cartItems];
            updatedCart[productIndex].quantity += quantityToAdd;

            // Remove the product from the cart if the quantity becomes zero
            if (updatedCart[productIndex].quantity === 0) {
                updatedCart.splice(productIndex, 1);
            }

            setCartItems(updatedCart);
        } else {
            // If the product is not in the cart, add it as a new item with the specified quantity
            setCartItems([...cartItems, { ...product, quantity: quantityToAdd }]);
        }
    };

    const subCounter = () => {
        if (quantity > 0) {
            setQuantity((prevQuantity) => prevQuantity - 1);
        }
    };

    const addCounter = () => {
        setQuantity((prevQuantity) => prevQuantity + 1);
    };

    const addToCart = () => {
        // Check if a product is selected
        if (selectedProduct) {
            // Add the selected product to the cart with the specified quantity
            handleCartQuantity(selectedProduct, quantity);
            // Close the modal
            setIsModalVisible(false);
            // Reset the quantity back to 0
            setQuantity(0);
        }
    };

    return (
        <View style={styles.container}>
            {/* this constitute the cart, the search bar and the menu icon at the top of the screen */}
            <View style={styles.serviceHeader}>
                <TextInput placeholder='Search Items' style={{ borderWidth: 1, flex: 2, borderRadius: 5, padding: 5, borderColor: '#1BCDCD' }} />
                <TouchableOpacity style={{ elevation: 5 }}>
                    <Button title={`CART ITEMS (${cartItems.length})`} color={'#1BCDCD'} />
                </TouchableOpacity>
            </View>

            {/* Add buttons for each category */}
            <View style={styles.categoryButtons}>
                <TouchableOpacity onPress={() => handleCategoryChange('storage')} style={category === 'storage' ? styles.activeCategoryButton : styles.categoryButton}>
                    <Text style={styles.categoryButtonText}>Storage</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleCategoryChange('internal')} style={category === 'internal' ? styles.activeCategoryButton : styles.categoryButton}>
                    <Text style={styles.categoryButtonText}>Internal</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleCategoryChange('laptop')} style={category === 'laptop' ? styles.activeCategoryButton : styles.categoryButton}>
                    <Text style={styles.categoryButtonText}>Laptop</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleCategoryChange('accessories')} style={category === 'accessories' ? styles.activeCategoryButton : styles.categoryButton}>
                    <Text style={styles.categoryButtonText}>Accessories</Text>
                </TouchableOpacity>
                
            </View>
            <View>
          
            </View>
            <ScrollView style={styles.productView} horizontal={true}>
                {/* Map over the products array and render each product item */}
                {products.map((product, index) => (
                    <TouchableOpacity style={styles.productItem} key={index} onPress={() => handleProductPress(product)}>
                        <Image source={{ uri: 'data:image/jpeg;base64,' + product.image }} style={styles.productImage} />

                        <View style={styles.productInfo}>
                            <Text style={styles.productName}>{product.name}</Text>
                            <Text style={styles.productBrand}>Brand: {product.brand}</Text>
                            <Text style={styles.productPrice}>GHC {product.price}</Text>
                        </View>
                    </TouchableOpacity>
                ))}
                 
            </ScrollView>
            {/* Pop-up View */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={isModalVisible}
                onRequestClose={() => setIsModalVisible(false)}
            >
                <View style={styles.modalView}>
                    <View style={styles.modalContent}>
                        {selectedProduct && (
                            <>
                                <Image source={{ uri: 'data:image/jpeg;base64,' + selectedProduct.image }} style={styles.modalProductImage} />
                                <Text style={styles.modalProductName}>{selectedProduct.name}</Text>
                                <Text style={styles.modalProductBrand}>Brand: {selectedProduct.brand}</Text>
                                <Text style={styles.modalProductBrand}>Description: {selectedProduct.description}</Text>
                                <Text style={styles.modalProductPrice}>GHC {selectedProduct.price}</Text>
                                {/* Add other details you want to display */}
                            </>
                        )}
                        <TouchableOpacity style={styles.modalCloseButton} onPress={() => setIsModalVisible(false)}>
                            <Text style={styles.modalCloseButtonText}>X</Text>
                        </TouchableOpacity>

                        {/* Cart Manipulation */}
                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 20 }}>
                            <TouchableOpacity style={styles.modalAddToCart} onPress={subCounter}>
                                <Text style={styles.modalCloseButtonText}>-</Text>
                            </TouchableOpacity>
                            <View style={styles.modalAddToCart}>
                                <Text>{quantity}</Text>
                            </View>
                            <TouchableOpacity style={styles.modalAddToCart} onPress={addCounter}>
                                <Text style={styles.modalCloseButtonText}>+</Text>
                            </TouchableOpacity>
                        </View>

                        <TouchableOpacity style={styles.addToCartButton} onPress={addToCart}>
                            <Text style={styles.addToCartButtonText}>ADD TO CART</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

            <NavFooter />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#CBE4E4',
        alignItems: 'center',
        justifyContent: 'center',
    },
    serviceHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        gap: 10,
        elevation: 5,
    },
    categoryButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
        gap: 10,
    },
    categoryButton: {
        backgroundColor: '#000',
        padding: 10,
        borderRadius: 5,
        elevation: 5,
    },
    activeCategoryButton: {
        backgroundColor: '#1BCDCD',
        padding: 10,
        borderRadius: 5,
        elevation: 5,
    },
    categoryButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    productView: {
        backgroundColor: 'transparent',
        marginBottom: 70,
        paddingHorizontal: 10,
    },
    productItem: {
        height: 180,
        width: 180,
        borderRadius: 10,
        elevation: 5,
        marginRight: 20,
        marginVertical: 5,
    },
    productInfo: {
        width: 180,
        height: 55,
        backgroundColor: '#353638',
        position: 'absolute',
        bottom: 0,
        padding: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    productName: {
        color: '#fff',
        fontSize: 10,
        fontWeight: 'bold',
    },
    productBrand: {
        color: '#fff',
        fontSize: 10,
    },
    productPrice: {
        color: '#1BCDCD',
    },
    productImage: {
        width: 180,
        height: 140,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        resizeMode: 'stretch',
    },
    productCategory: {
        backgroundColor: '#181F20',
        color: '#fff',
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginBottom: 10,
        marginTop: 30,
        marginHorizontal: 0,
        fontWeight: 'bold',
        fontSize: 20,
    },
    modalView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
    },
    modalContent: {
        backgroundColor: '#CBE4E4',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
        width: '90%',
        height: '80%',
    },
    modalProductImage: {
        width: 300,
        height: 300,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        resizeMode: 'stretch',
        elevation: 5,
    },
    modalProductName: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    modalProductBrand: {
        fontSize: 16,
        marginBottom: 5,
    },
    modalProductPrice: {
        fontSize: 18,
        color: '#1BCDCD',
        marginBottom: 20,
    },
    modalCloseButton: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        padding: 10,
        borderRadius: 50,
        position: 'absolute',
        right: 0,
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalCloseButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    modalAddToCart: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        padding: 10,
        borderRadius: 5,
        right: 0,
        width: 50,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    addToCartButton: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        width: 300,
        padding: 10,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    addToCartButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
