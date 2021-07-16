import { ReactElement } from 'react';
import {
    Button,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Textarea
} from '@chakra-ui/react';

interface Props {
    isVisible: boolean;
    onClose: () => void;
}

export function ContactModal({ isVisible, onClose }: Props): ReactElement {
    const sendEmail = () => {
        onClose();
    };

    return (
        <Modal isOpen={isVisible} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Send an Email</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Input variant={'filled'} placeholder={'Email'} marginBottom={4} />
                    <Textarea placeholder={'Message...'} height={'300px'} />
                </ModalBody>
                <ModalFooter>
                    <Button onClick={sendEmail}>Send</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}
