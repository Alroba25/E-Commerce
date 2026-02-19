import { clearAllItems, removeItem } from "@/app/features/Cart/cartSlice";
import { setNavigateProductId } from "@/app/features/Product/productSlice";
import type { RootState } from "@/app/store";
import type { IProduct } from "@/Interfaces";
import { Button, CloseButton, Drawer, Portal } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

interface IDrawer {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const DrawerCom = ({ open, setOpen }: IDrawer) => {
  const dispatch = useDispatch();

  const cartContent = useSelector(
    (state: RootState) => state.cart.productsCart,
  );

  return (
    <Drawer.Root open={open} onOpenChange={(details) => setOpen(details.open)}>
      <Portal>
        <Drawer.Backdrop className="bg-imperial-dark/50 backdrop-blur-sm" />
        <Drawer.Positioner>
          <Drawer.Content className="max-w-sm flex flex-col bg-imperial-bg border-l-4 border-imperial-primary shadow-2xl">
            {/* Header */}
            <Drawer.Header className="border-b border-imperial-accent/30 bg-imperial-bg">
              <Drawer.Title className="text-xl font-bold text-imperial-dark flex items-center gap-2">
                <span className="text-2xl">🛒</span> Your Cart (
                {cartContent.length})
              </Drawer.Title>
            </Drawer.Header>

            {/* Body */}
            <Drawer.Body className="flex-1 overflow-y-auto bg-imperial-bg p-4 scrollbar-thin">
              {cartContent.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <p className="text-imperial-dark/50 text-lg mb-2">
                    Your cart is empty
                  </p>
                  <p className="text-4xl">🍂</p>
                  <Button
                    onClick={() => setOpen(false)}
                    className="mt-4 bg-imperial-primary text-white hover:bg-imperial-hover"
                  >
                    Start Shopping
                  </Button>
                </div>
              ) : (
                <div className="flex flex-col gap-4">
                  {cartContent.map((p: IProduct) => {
                    const imageUrl = p.thumbnail?.url
                      ? `${import.meta.env.VITE_SERVER_BASE}${p.thumbnail.url}`
                      : "https://via.placeholder.com/80";

                    return (
                      <div
                        key={p.id}
                        className="flex items-center gap-4 bg-white border border-imperial-accent/30 rounded-xl p-3 shadow-sm hover:shadow-md hover:border-imperial-primary/50 transition-all duration-300 transform hover:-translate-y-1"
                      >
                        {/* Product Image */}
                        <div className="bg-imperial-bg/50 rounded-lg p-2">
                          <img
                            src={imageUrl}
                            alt={p.title}
                            className="w-16 h-16 object-contain mix-blend-multiply"
                          />
                        </div>

                        {/* Product Info */}
                        <div className="flex-1">
                          <Link
                            to="/product"
                            onClick={() => {
                              dispatch(setNavigateProductId(p.documentId));
                              setOpen(false);
                            }}
                            className="font-bold text-imperial-dark hover:text-imperial-primary line-clamp-1 text-lg mb-1"
                          >
                            {p.title}
                          </Link>

                          <p className="text-xs text-imperial-dark/60 line-clamp-1 mb-1">
                            {p.description || "No description"}
                          </p>

                          <span className="text-imperial-primary font-bold text-md">
                            ${p.price}
                          </span>
                        </div>

                        {/* Remove Button */}
                        <button
                          onClick={() => {
                            dispatch(removeItem(p.documentId));
                          }}
                          className="cursor-pointer text-imperial-dark/40 hover:text-red-600 transition-colors p-2 rounded-full hover:bg-red-50"
                          title="Remove item"
                        >
                          ✕
                        </button>
                      </div>
                    );
                  })}
                </div>
              )}
            </Drawer.Body>

            {/* Footer */}
            <Drawer.Footer className="flex gap-3 border-t border-imperial-accent/30 bg-imperial-bg p-4">
              <Link className="flex-1" to={"/cart"}>
                <Button
                  width="full"
                  className="bg-imperial-primary text-white hover:bg-imperial-hover font-bold shadow-md hover:shadow-lg transition-all"
                >
                  Checkout
                </Button>
              </Link>
              <Button
                width="full"
                className="bg-white border border-imperial-dark/20 text-imperial-dark hover:bg-red-50 hover:text-red-600 hover:border-red-200"
                onClick={() => {
                  dispatch(clearAllItems());
                }}
              >
                Clear
              </Button>
            </Drawer.Footer>

            <Drawer.CloseTrigger asChild>
              <CloseButton
                size="sm"
                className="text-imperial-dark hover:bg-imperial-accent/20"
              />
            </Drawer.CloseTrigger>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  );
};

export default DrawerCom;
