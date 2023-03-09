import firebase from "firebase";

export type BondProps = {
  listedTokenAddresses: string[];
  activeTokenAddresses: string[];
  baseUrl: string;
};

export const getListedTokenAddresses = async (): Promise<string[]> => {

  // Get listed items
  let snapshot = await firebase.database().ref("/terms").once("value");
  const allTerms = snapshot.val();
  const listedTokenAddresses = allTerms ? Object.keys(allTerms) : [];
  return listedTokenAddresses;
}