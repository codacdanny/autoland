import React from "react";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { Expense } from "../utils/types/expenses";

interface EditExpenseModalProps {
  isOpen: boolean;
  onClose: () => void;
  expense: Expense | null;
  onUpdate: (expense: Expense) => void;
}

const EditExpenseModal: React.FC<EditExpenseModalProps> = ({
  isOpen,
  onClose,
  expense,
  onUpdate,
}) => {
  const [editedExpense, setEditedExpense] = React.useState<Expense | null>(
    null
  );

  React.useEffect(() => {
    setEditedExpense(expense);
  }, [expense]);

  const handleUpdate = () => {
    if (editedExpense) {
      onUpdate(editedExpense);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Edit Expense</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {editedExpense && (
            <VStack spacing={4}>
              <FormControl>
                <FormLabel>Category</FormLabel>
                <Select
                  value={editedExpense.category}
                  onChange={(e) =>
                    setEditedExpense({
                      ...editedExpense,
                      category: e.target.value,
                    })
                  }
                >
                  <option value="fuel">Fuel</option>
                  <option value="equipment">Equipment</option>
                  <option value="maintenance">Maintenance</option>
                  <option value="others">Others</option>
                </Select>
              </FormControl>

              <FormControl>
                <FormLabel>Description</FormLabel>
                <Textarea
                  value={editedExpense.description}
                  onChange={(e) =>
                    setEditedExpense({
                      ...editedExpense,
                      description: e.target.value,
                    })
                  }
                  placeholder="Enter description"
                />
              </FormControl>

              <FormControl>
                <FormLabel>Amount</FormLabel>
                <Input
                  type="number"
                  value={editedExpense.amount}
                  onChange={(e) =>
                    setEditedExpense({
                      ...editedExpense,
                      amount: Number(e.target.value),
                    })
                  }
                  placeholder="Enter amount"
                />
              </FormControl>

              <FormControl>
                <FormLabel>Payment Method</FormLabel>
                <Select
                  value={editedExpense.paymentMethod}
                  onChange={(e) =>
                    setEditedExpense({
                      ...editedExpense,
                      paymentMethod: e.target.value,
                    })
                  }
                >
                  <option value="cash">Cash</option>
                  <option value="transfer">Bank Transfer</option>
                  <option value="card">Card Payment</option>
                </Select>
              </FormControl>

              <Button colorScheme="blue" onClick={handleUpdate}>
                Update Expense
              </Button>
            </VStack>
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default EditExpenseModal;
